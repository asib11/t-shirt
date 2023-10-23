import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Review from './components/Order/Review.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Grandpa from './components/grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('TShirt.json')
      },
      {
        path: '/review',
        element: <Review></Review>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
