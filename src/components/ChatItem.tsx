import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { SendMessageForm } from './SendMessageForm';

export const ChatItem: FC = () => {
  const { userId } = useParams();
  const chats = useAppSelector(state => state.chats);

  const chatContent = chats.find((chat) => chat.userId === userId);

  return (
    <>
      <ul>
        {chatContent?.messageHistory.map(messeges => (
          <li key={messeges.messageId}>
            <span>{messeges.text}</span>
            <span>{messeges.date}</span>
          </li>
        ))}
      </ul>
      <SendMessageForm chatId={userId} />
    </>

  );
};
