import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ChatsItem } from './ChatsItem';

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
    <ul className="chats__list">
      {
        visibleChats.map(chat => (
          <ChatsItem chat={chat} key={chat.userId} />
        ))
      }
    </ul>
  );
};
