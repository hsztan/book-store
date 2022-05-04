import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, createBook, deleteBook } from './books-api';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const DELETE_BOOK = 'bookstore/book/DELETE_BOOK';
const GET_BOOKS = 'bookstore/book/GET_BOOKS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_BOOKS:
      return [...state, ...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const getBooks = () => async (dispatch) => {
  let books;
  try {
    books = await fetchBooks();
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  } catch (err) {
    return err;
  }
  return books;
};

export const addBook = (book) => async (dispatch) => {
  try {
    const newBook = await createBook({ ...book, item_id: uuidv4() });
    console.log('created book', newBook);
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await deleteBook(id);
    dispatch({
      type: DELETE_BOOK,
      id,
    });
    return true;
  } catch (err) {
    return err;
  }
};
