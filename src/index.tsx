import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Components/Global/ErrorPage";
import {NextUIProvider} from "@nextui-org/react";
import CreateEventPage from "./Components/CreateEvent/CreateEventPage";
import HistoryPage from "./Components/History/HistoryPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/create',
        element: <CreateEventPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/history',
        element: <HistoryPage/>,
        errorElement: <ErrorPage/>,
    },
]);
root.render(
  <React.StrictMode>
      <NextUIProvider>
          <main className="dark text-foreground bg-background">
              <RouterProvider router={router}/>
          </main>
      </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();
