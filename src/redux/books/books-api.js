import { v4 as uuidv4 } from 'uuid';

const apiID = 'f6uWYv82spANfwaecyC9';
const bookEndpoint = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

export const fetchBooks = async () => {
  try {
    const res = await fetch(
      bookEndpoint,
    );
    const data = await res.json();
    const books = [];
    Object.entries(data).forEach((book) => books.push({ ...book[1][0], id: book[0] }));
    return books;
  } catch (err) {
    return err;
  }
};

export const createBook = async (book) => {
  try {
    const res = await fetch(
      bookEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...book, item_id: uuidv4() }),
      },
    );
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    return err;
  }
  return false;
};

export const deleteBook = async (id) => {
  try {
    const res = await fetch(
      `${bookEndpoint}/${id}`, {
        method: 'DELETE',
      },
    );
    if (res.status === 200) {
      return true;
    }
  } catch (err) {
    return err;
  }
  return false;
};
