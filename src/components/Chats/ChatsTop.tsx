import { FC } from 'react';
import { SearchField } from '../SearchField';

export const ChatsTop :FC = () => (
  <div className="chats__top">
    <img
      className="chats__user-icon user-icon"
      // eslint-disable-next-line max-len
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=580&amp"
      alt="John Doe"
      width="50"
      height="50"
    />
    <SearchField />
  </div>
);
