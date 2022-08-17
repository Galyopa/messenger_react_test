/// <reference types="react-scripts" />
interface Chat {
  userId: string;
  userImg: string;
  username: string;
  messageHistory: Message [];
}

interface Message {
  chatId: string;
  messageId: string;
  text: string;
  isAuthor: boolean;
  date: string;
}
