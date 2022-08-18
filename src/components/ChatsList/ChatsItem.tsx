import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';

type Status = { isActive: boolean };

const getActiveClasses = (status: Status) => classNames(
  'chats__link',
  { 'chats__link-active': status.isActive },
);

const dateOptions: Intl.DateTimeFormatOptions = {
  timeStyle: 'short',
};

type Props = {
  chat: Chat;
};

export const ChatsItem: FC<Props> = ({ chat }) => {
  const lastMessageIndex = chat.messageHistory.length - 1;
  const date = new Date(chat.messageHistory[lastMessageIndex].date)
    .toLocaleString('en-US', dateOptions);
  const { text } = chat.messageHistory[lastMessageIndex];

  return (
    <li className="chats__item" key={chat.userId}>
      <NavLink
        className={getActiveClasses}
        to={chat.userId}
      >
        <div className="chats__img-wrapper">
          <img
            className="chats__img user-icon"
            src={chat.userImg}
            alt={chat.username}
            width="50"
            height="50"
          />
        </div>

        <div className="chats__content">
          <h2 className="chats__username">{chat.username}</h2>
          <p className="chats__last-message">
            {
              text
            }
          </p>
          <span className="chats__date">
            { date }
          </span>
        </div>
      </NavLink>
    </li>
  );
};
