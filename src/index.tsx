import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import axios from 'axios';

import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';

import { createStore } from 'redux';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Components
import App from "./components/App/App";

import "./assets/css/index.scss";

axios.defaults.baseURL = "https://localhost:8000/api/";
axios.defaults.withCredentials = true;

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

const persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </CookiesProvider>,
  rootElement
);
