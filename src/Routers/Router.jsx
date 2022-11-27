import { createBrowserRouter } from 'react-router-dom';
import EnterFace from '../components/EnterFace/EnterFace';
import GameDetails from '../components/gameDetails/GameDetails';
import Games from '../components/games/Games';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import LoginLayout from '../components/Layout/LoginLayout';
import ProdcterRouter from '../components/ProdcterRouter';
import Login from '../components/useres/log/Login';
import Register from '../components/useres/Register/Register';

const Router = createBrowserRouter([
  {
    path: '/',

    element:

     <Layout />,
    children: [
      {
        path: '/',
        element: <EnterFace />,
        children: [
          {
            path: '/register',
            element: <Register />,
          },
          {
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    element: (
        <ProdcterRouter>
          <LoginLayout />
        </ProdcterRouter>
    ),
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/home/all',
        element: <Games />,
      },
      {
        path: '/home/platform/:platform',
        element: <Games />,
      },
      {
        path: '/home/category/:category',
        element: <Games />,
      },
      {
        path: '/home/sort-by/:sort',
        element: <Games />,
      },
      {
        path: '/home/gameDetails/:id',
        element: <GameDetails />,
      },
    ],
  },
]);

export default Router;
