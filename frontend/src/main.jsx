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
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/chat-messages" element={<Chat />} />
            <Route path="/chat-window" element={<ChatWindow />} />
            <Route path="/dummy-cash" element={<DummyCurrencyComponent />} />
            
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
