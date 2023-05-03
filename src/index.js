import React from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";

// REDUX setup
import { Provider } from "react-redux";
import store from "./redux/store";

// CSS Setup
import "./styles/bootstrap.scss"

// Router Page
import Router from "./pages/RouterPage"

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <HashRouter>
        <Router />
    </HashRouter>
  </Provider>
);
