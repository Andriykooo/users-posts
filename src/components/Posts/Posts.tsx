import React, { useState, useEffect } from 'react';

import { getPosts } from '../../api/posts';
// @ts-ignore
import { ModalAddPost } from '../ModalAddPost/ModalAddPost.tsx';

export const Posts = ({ selectedUser, setPost }: any) => {
  type PostType = {
    id: number,
    userId: number,
    title: string,
  };

  const [postsFromServer, setPosts] = useState<PostType[]>();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    getPosts(selectedUser)
      .then(setPosts);
  }, [selectedUser]);

  const onClickPostDetails = (postId: number) => {
    setPost(postId);
  };

  const onClickSetModalActive = () => {
    setModalActive(true);
  };

  return (
    <div>
      {!postsFromServer
        ? (
          <span>Loading...</span>
        ) : (
          <div>
            Posts:
            <br />
            <button
              type="button"
              onClick={() => onClickSetModalActive()}
            >
              Add new
            </button>
            <ModalAddPost
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
            <ul>
              {postsFromServer.map((post: PostType) => (
                <li key={post.id}>
                  {post.title}
                  <button
                    type="button"
                    onClick={() => {
                      onClickPostDetails(post.id);
                    }}
                  >
                    Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};
