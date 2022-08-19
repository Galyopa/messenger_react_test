import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Messages } from './components/Messages';
import { Chats } from './components/Chats';

export const App: FC = () => (
  <div className="page__container">
    <Routes>
      <Route path="/" element={<Chats />}>
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
    </Routes>
  </div>
);
