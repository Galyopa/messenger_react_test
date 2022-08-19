import classNames from 'classnames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useChatScroll } from '../../utils/useChatScroll';
import { SendMessageForm } from '../SendMessageForm';
import './messages.scss';

const dateOptions: Intl.DateTimeFormatOptions = {
  dateStyle: 'short',
  timeStyle: 'medium',
};

export const Messages: FC = () => {
  const { userId } = useParams();
  const chats = useAppSelector(state => state.chats);
  const chatContent = chats.find((chat) => chat.userId === userId);

  const ref = useChatScroll(chatContent);

  return (
    <>
      <div className="messages__top">
        <img
          className="messages__img user-icon"
          src={chatContent?.userImg}
          alt={chatContent?.username}
        />
        <p className="messages__username">
          {chatContent?.username}
        </p>
      </div>
      <div ref={ref} className="messages__center">
        <ul className="messages__list">
          {chatContent?.messageHistory.map(messages => (
            <li className="messages__item" key={messages.messageId}>
              <div className={classNames(
                'messages__content',
                { 'messages__content--author': messages.isAuthor },
              )}
              >
                <p className="messages__text">{messages.text}</p>
                <p className="messages__date">
                  {new Date(messages.date).toLocaleString('en-US', dateOptions)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="messages__bottom">
        <SendMessageForm
          chatId={userId}
          username={chatContent?.username}
        />
      </div>
    </>

  );
};
