import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { store } from './app/app';
import { saveState } from './app/LocalStorage';
import './styles/reset.css';
import './styles/App.scss';

store.subscribe(
  () => {
    saveState(store.getState());
  },
);

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  );
