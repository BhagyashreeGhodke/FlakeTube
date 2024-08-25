import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, About, Contact, Signup, Login, Chat, ChatWindow, DummyCurrencyComponent } from './components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
