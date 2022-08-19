import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './chats.scss';
import { ChatsList } from './ChatsList';
import { ChatsTop } from './ChatsTop';

export const Chats: FC = () => {
  return (
    <main className="page__main">
      <div className="chats">
        <ChatsTop />
        <div className="chats__bottom">
          <ChatsList />
        </div>
      </div>
      <div className="messages">
        <Outlet />
      </div>
    </main>
  );
};
