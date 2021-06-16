import { request } from './api';

export const getComments = (postId) => request(`/comments?postId=${postId}`);

// export const removePostComment = commentId => fetch(
//   `${BASE_URL}/comments/${commentId}`,
//   { method: 'DELETE' },
// );

// export const addPostComment = (
//   postId,
//   { nameInput, emailInput, bodyInput },
// ) => fetch(
//   `${BASE_URL}/comments`,
//   {
//     method: 'POST',
//     body: JSON.stringify({
//       postId,
//       name: nameInput,
//       email: emailInput,
//       body: bodyInput,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   },
// );
