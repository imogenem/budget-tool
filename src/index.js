import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import reducers from './redux/inputReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: reducers});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);


