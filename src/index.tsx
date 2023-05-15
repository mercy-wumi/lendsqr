import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import UserDetails from './routes/UserDetails';
import Users, { loaderUsers as usersLoader } from './routes/Users';
import UserContextProvider from './context/UserContext'
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/users",
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: "/dashboard/userdetails",
        element: <UserDetails />,
      },
    ]
  },
])


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
