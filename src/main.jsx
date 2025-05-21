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


const router  = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:         
          <Login/>
      },
      {
         path:'/register',
         element: <Register/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
