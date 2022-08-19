import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import CreateProducts from '../pages/CreateProducts';
import EditProducts from '../pages/EditProducts';
import DeleteProducts from '../pages/DeleteProducts';

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
  {
    path: '/editProducts',
    Component: EditProducts,
  },
  {
    path: '/deleteProducts',
    Component: DeleteProducts,
  },
];

export default routes;
