import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {createBrowserRouter,RouterProvider} from'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <><Header/><Home/></>,
    errorElement:<NotFoundPage />
  },
{
    path: '/Cart',
    element: <><Header/><Cart/></>
  }],{basename: import.meta.env.DEV ? '/' : '/Shopper'});

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
