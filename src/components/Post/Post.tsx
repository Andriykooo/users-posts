import React, { useState, useEffect } from 'react';

import { getComments } from '../../api/comments';

export const Post = ({ selectedPost }: any) => {
  type CommentType = {
    id: number,
    name: string,
    postId: number,
  };

  const [commentsFromServer, setComments] = useState<CommentType[]>();

  useEffect(() => {
    getComments(selectedPost)
      .then(setComments);
  }, [selectedPost]);

  return (
    <div>
      {!commentsFromServer ? (
        <span>Loading...</span>
      ) : (
        <div>
          Comments:
          <ul>
            {commentsFromServer.map((comment: CommentType) => (
              <li key={comment.id}>
                {comment.name}
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
