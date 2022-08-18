import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Messages';
import { ChatsList } from './components/ChatsList';

export const App: FC = () => (
  <div className="page__container">
    <Routes>
      <Route path="/" element={<ChatsList />}>
        <Route
          index
          element={(
            <div className="messages__empty">
              <p>Select a chat</p>
            </div>
          )}
        />
        <Route path=":userId" element={<Messages />} />
      </Route>
      <Route path="home" element={<Navigate to="/" />} />
      <Route
        path="*"
        element={<h1>Page not found</h1>}
      />
    </Routes>
  </div>
);
