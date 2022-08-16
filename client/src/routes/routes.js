import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import CreateProducts from '../pages/CreateProducts';

const routes = [
  {
    path: '/',
    Component: Dashboard,
  },
  {
    path: '/products',
    Component: Products,
  },
  {
    path: '/addProducts',
    Component: CreateProducts,
  },
];

export default routes;
