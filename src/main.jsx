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
import ErrorPage from './Components/ErrorPage/errorPage.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import GroupDetailsPage from './Components/GroupDetailsPage/GroupDetailsPage.jsx';

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "./Theme.jsx";
import FeaturesGroup from './Components/FeaturesGroup/FeaturesGroup.jsx';
import Support from './Components/Support/Support.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Overview from './Components/Dashboard/Overview.jsx';
import AllItems from './Components/Dashboard/AllItems.jsx';
import AddItem from './Components/Dashboard/AddItem.jsx';
import MyItems from './Components/Dashboard/MyItems.jsx';





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
        path: '/all-groups',
        element: <AllGroupPage />
      },
      {
        path: '/featured-group',
        element: <FeaturesGroup />
      },

      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: "/update-group",
        element: <UpdateGroup />
      },
      {
        path: "/update-group/:id",
        element: <UpdateGroup />
      },
      {
        path: "/support",
        element: <Support/>
      },
      {
        path: '/group-details-page/:id',
        element: (<PrivateRoute>
          <GroupDetailsPage />
        </PrivateRoute>)
      },

    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
      { path: 'all-items', element: <AllItems /> },
      { path: 'add-item', element: <AddItem /> },
      { path: 'my-items', element: <MyItems /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>

  </StrictMode>,
)
