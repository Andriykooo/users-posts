import React, { useEffect, useState } from 'react';

import { getUsers } from '../../api/users';

export const Users = ({ setUser }: any) => {
  type UsersType = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
  };

  const [usersFromServer, setUsers] = useState<UsersType[]>();

  useEffect(() => {
    getUsers()
      .then(setUsers);
  }, []);

  const onUserClick = (userId: number) => {
    setUser(userId);
  };

  return (
    <div>
      {!usersFromServer
        ? (<span>Loading...</span>
        ) : (
          <ul>
            {usersFromServer.map((user: UsersType) => (
              <li key={user.id}>
                User:&nbsp;
                {user.name}
                <button
                  type="button"
                  onClick={() => onUserClick(user.id)}
                >
                  Posts
                </button>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
