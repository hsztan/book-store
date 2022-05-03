import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const DELETE_BOOK = 'bookstore/book/DELETE_BOOK';

const initialState = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', id: uuidv4() },
  { title: 'Catcher in the Rye', author: 'J.D. Salinger', id: uuidv4() },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', id: uuidv4() },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', id: uuidv4() },
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.data.id);
    default:
      return state;
  }
}

export function addBook(book) {
  const id = uuidv4();
  return {
    type: ADD_BOOK,
    data: { ...book, id },
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id,
  };
}
