import React, { FC, useState } from 'react';

// @ts-ignore
import { Users } from './components/Users/Users.tsx';
// @ts-ignore
import { Posts } from './components/Posts/Posts.tsx';
// @ts-ignore
import { Post } from './components/Post/Post.tsx';

const App: FC = () => {
  const [selectedUser, setUser] = useState<number | undefined>();
  const [selectedPost, setPost] = useState();

  return (
    <div className="App">
      <div>
        <Users setUser={setUser} />
      </div>
      {selectedUser && <div><Posts selectedUser={selectedUser} setPost={setPost} /></div>}
      {selectedPost && <div><Post selectedPost={selectedPost} /></div>}
    </div>
  );
};

export default App;
