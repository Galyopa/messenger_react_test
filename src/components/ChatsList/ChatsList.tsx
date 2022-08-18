import { FC } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { SearchField } from '../SearchField';
import { ChatsItem } from './ChatsItem';
import './chats.scss';

export const ChatsList: FC = () => {
  const [searchParams] = useSearchParams();
  const chats = useAppSelector(state => state.chats);

  const query = searchParams.get('query');

  let visibleChats = [...chats];

  visibleChats.sort(
    (
      a: Chat,
      b: Chat,
    ) => new Date(b.messageHistory[b.messageHistory.length - 1].date).getTime()
    - new Date(a.messageHistory[a.messageHistory.length - 1].date).getTime(),
  );

  if (query) {
    const lowerQuery = query.toLocaleLowerCase();

    visibleChats = chats.filter(chat => {
      return [chat.username, chat.messageHistory.map(message => message.text)]
        .join('\n')
        .toLocaleLowerCase()
        .includes(lowerQuery);
    });
  }

  return (
    <main className="page__main">
      <div className="chats">
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
        <div className="chats__bottom">
          <ul className="chats__list">
            {
              visibleChats.map(chat => (
                <ChatsItem chat={chat} />
              ))
            }
          </ul>
        </div>
      </div>
      <div className="messages">
        <Outlet />
      </div>
    </main>
  );
};
