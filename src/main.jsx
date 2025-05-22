import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar/Navbar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx'
import Home from './Components/Home/Home.jsx'
import PrivateRoute from './Components/Routes/PrivateRoutes.jsx'
import Login from './Components/Login/Login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Register from './Components/Register/Register.jsx';
import MyGroupPage from './Components/MyGroupPage/MyGroupPage.jsx';
import CreateGroup from './Components/CreateGroup/CreateGroup.jsx';
import UpdateGroup from './Components/UpdateGroup/UpdateGroup.jsx';
import AllGroupPage from './Components/AllGroupPage/AllGroupPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import FeaturedGroup from './Components/FeaturedGroup/Featuredgroup.jsx';
import ErrorPage from './Components/ErrorPage/errorPage.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element:
          <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/my-group-page',
        element: <MyGroupPage />
      },
      {
        path: '/create-group',
        element: <CreateGroup />
      },
      {
        path: '/update-group',
        element: <UpdateGroup />
      },
      {
        path: '/all-groups',
        element: <AllGroupPage />
      },
      {
        path: '/featured-group',
        element: <FeaturedGroup />
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },

    ],
    errorElement: <ErrorPage />
  },

  {
    path: '*',
    element: <ErrorPage />
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>


  </StrictMode>,
)
