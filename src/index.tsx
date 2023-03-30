import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import UserDetails from './routes/UserDetails';
import Users from './routes/Users';
import UserContextProvider from './context/UserContext'

const loader = async () => {
  const resp = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  const users = await resp.json()
  return users
}

// const loaderId = async ({params}: any) => {
//   const resp = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.userId}`)
//   const user = await resp.json()
//   return user
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: loader,
      },
      {
        path: "/users/:userId",
        element: <UserDetails />,
        // loader: loaderId
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
], { basename: '/dashboard' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
