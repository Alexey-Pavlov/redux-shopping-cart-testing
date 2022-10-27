import {Provider} from "react-redux";
import {store} from "./app/store";
import "./index.css";
import App from "./App";

import {createRoot} from 'react-dom/client';
import React from "react";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
