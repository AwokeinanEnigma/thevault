import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteLister from "./NoteLister";
import Why from "./notes/Why";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hikki from "./notes/Hikki";
import SunlessElysiumDevelopmentLog1 from "./notes/SunlessElysiumDevelopmentLog1";
import Stuff from "./Stuff";

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
    {
        path: "thevault/notes/hikki",
        element: <Hikki/>,
    },
    {
        path: "thevault/notes/sunlesselysiumdevelopmentlog1",
        element: <SunlessElysiumDevelopmentLog1/>,
    },
    {
        path: "thevault/stuff",
        element: <Stuff/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
