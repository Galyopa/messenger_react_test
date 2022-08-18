import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import { addMessageToHistory } from '../../app/features/chats';
import { getAnswer } from '../../api/answerFromChuk';
import './sendForm.scss';

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
        date: new Date().toString(),
      };

      dispatch(addMessageToHistory(newMessage));

      getAnswer().then(re => {
        const Answer: Message = {
          chatId,
          messageId: uuidv4(),
          text: re.value,
          isAuthor: false,
          date: new Date().toString(),
        };

        dispatch(addMessageToHistory(Answer));
      });
    }

    setTextMessage('');
  };

  return (
    <form
      className="sendForm"
      onSubmit={handleSubmit}
    >
      <label
        className="sendForm__label"
        htmlFor="message"
      >
        <input
          className="sendForm__input"
          autoComplete="off"
          type="text"
          value={textMessage}
          name="message"
          id="message"
          placeholder="Message"
          onChange={event => setTextMessage(event.target.value)}
        />
      </label>
      <button
        className="sendForm__button"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
