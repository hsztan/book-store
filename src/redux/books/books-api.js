const apiID = 'f6uWYv82spANfwaecyC9';
const bookEndpoint = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

export const fetchBooks = async () => {
  try {
    const res = await fetch(
      bookEndpoint,
    );
    const data = await res.json();
    const books = [];
    Object.entries(data).forEach((book) => books.push({ ...book[1][0], item_id: book[0] }));
    return books;
  } catch (err) {
    return err;
  }
};

export const createBook = async (book) => {
  try {
    await fetch(
      bookEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );
    return book;
  } catch (err) {
    return err;
  }
};

export const deleteBook = async (id) => {
  try {
    const res = await fetch(
      `${bookEndpoint}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: id }),
      },
    );
    if (res.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
  return false;
};
