const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v7S5ALyWbBHx93kG94kx/books';

export const fetchBookData = async () => {
  const resp = await fetch(baseUrl, {
    method: 'GET',
  });
  const data = await resp.json();
  return data;
};

export const addBookData = async (book) => {
  const { id, title, category } = book;
  const resp = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      category,
    }),
  });
  const data = await resp.text();
  return data;
};

export const removeBookData = async (id) => {
  const url = `${baseUrl}/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};
