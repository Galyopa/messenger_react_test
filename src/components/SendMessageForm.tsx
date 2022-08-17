import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../app/hooks';
import { addMessageToHistory } from '../app/features/chats';
import { getAnswer } from '../api/answerFromChuk';

type Props = {
  chatId: string | undefined;
};

export const SendMessageForm:FC<Props> = ({ chatId }) => {
  const dispatch = useAppDispatch();

  const [textMessage, setTextMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textMessage.trim() && chatId) {
      const newMessage: Message = {
        chatId,
        messageId: uuidv4(),
        text: textMessage.trim(),
        isAuthor: true,
        date: Date(),
      };

      dispatch(addMessageToHistory(newMessage));

      getAnswer().then(re => {
        const Answer: Message = {
          chatId,
          messageId: uuidv4(),
          text: re.value,
          isAuthor: false,
          date: Date(),
        };

        dispatch(addMessageToHistory(Answer));
      });
    }

    setTextMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">
        <input
          value={textMessage}
          type="text"
          name="message"
          id="message"
          onChange={event => setTextMessage(event.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
