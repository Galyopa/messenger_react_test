// import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { SearchField } from './SearchField';

// type Status = { isActive: boolean };

// const getActiveClasses = (status: Status) => classNames(
//   'navbar-item',
//   { 'has-background-grey-lighter': status.isActive },
// );

export const ChatsList: FC = () => {
  const [searchParams] = useSearchParams();
  const chats = useAppSelector(state => state.chats);

  const query = searchParams.get('query');

  let visibleChats = [...chats];

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
    <>
      <SearchField />
      {
        visibleChats.map(chat => (
          <NavLink
            to={chat.userId}
            key={chat.userId}
          >
            <img
              src={chat.userImg}
              alt={chat.username}
              width="50"
              height="50"
            />
            <h2>{chat.username}</h2>
            <span>
              {
                chat.messageHistory[chat.messageHistory.length - 1].text
              }

            </span>
            <span>
              {
                chat.messageHistory[chat.messageHistory.length - 1].date
              }
            </span>
          </NavLink>
        ))
      }
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
    </>

  );
};
