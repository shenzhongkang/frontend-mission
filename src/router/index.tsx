/**
 * Router
 */
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../containers/home';
import { GenTable } from '../containers/gen-table';
import { Layout } from '../components';
import { ErrorPage, NotFound } from '../containers/common';
import { GenRecord } from '../containers/gen-record';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'table',
        element: <GenTable />,
      },
      {
        path: 'record',
        element: <GenRecord />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);
