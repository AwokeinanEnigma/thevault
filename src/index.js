import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NoteLister from "./NoteLister";
import Why from "./notes/Why";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "thevault/",
        element: <App/>,
    },
    {
        path: "thevault/notes",
        element: <NoteLister/>,
    },
    {
        path: "thevault/notes/why",
        element: <Why/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
