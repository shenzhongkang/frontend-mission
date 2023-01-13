/**
 * Router
 */
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../containers/home';
import { GenTable } from '../containers/gen-table';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/table',
    element: <GenTable />,
  },
]);
