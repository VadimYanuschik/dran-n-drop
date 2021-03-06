import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./globalStyles";
import {store} from "./redux/store";
import { Provider } from 'react-redux'
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App/>
        </Provider>
        </HashRouter>
    </React.StrictMode>
);