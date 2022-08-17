import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './features/chats';
import { loadState } from './LocalStorage';

export const store = configureStore({
  devTools: true,
  reducer: {
    chats: chatsReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
