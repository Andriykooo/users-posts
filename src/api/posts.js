import { request, BASE_URL } from './api';

export const getPosts = (userId) => request(`/posts?userId=${userId}`);

export const addPost = (
  userId,
  { titleInput, bodyInput },
) => fetch(
  `${BASE_URL}/posts`,
  {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title: titleInput,
      body: bodyInput,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },
);
