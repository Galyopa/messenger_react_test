import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { chatsItems } from '../../chats';

const chatsSlice = createSlice({
  name: 'chats',
  initialState: chatsItems,
  reducers: {
    addMessageToHistory: (state, action: PayloadAction<Message>) => {
      const currentChat = state.find(
        chat => chat.userId === action.payload.chatId,
      );

      currentChat?.messageHistory.push(action.payload);
    },
  },
});

export default chatsSlice.reducer;
export const { addMessageToHistory } = chatsSlice.actions;
