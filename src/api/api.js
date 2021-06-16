export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function request(page) {
  return fetch(`${BASE_URL}${page}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    });
}
