import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatItem } from './components/ChatItem';
import { ChatsList } from './components/ChatsList';

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<ChatsList />}>
      <Route index element={<p>Select a chat</p>} />
      <Route path=":userId" element={<ChatItem />} />
    </Route>
    <Route path="home" element={<Navigate to="/" />} />
    <Route
      path="*"
      element={<h1>Page not found</h1>}
    />
  </Routes>
);
