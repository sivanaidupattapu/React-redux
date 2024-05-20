import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Counter from './counter';
import Product from './product';
import Todolist from './store/todolist';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children :[
            {
                path: "/todo",
                element:<Todolist></Todolist>,
            },
            {
                path: "/counter",
                element: <Counter></Counter>,
            },
            {
                path: "/products",
                element: <Product></Product>,
            }
        ]
    },
    
]);
root.render(
    <Provider store={store}>
       <RouterProvider router={router}></RouterProvider>
    </Provider>

);
reportWebVitals();
