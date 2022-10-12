import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import CreateProducts from '../pages/CreateProducts';
import EditProducts from '../pages/EditProducts';
import DeleteProducts from '../pages/DeleteProducts';
import FinanceTable from '../pages/FinanceTable';

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
  {
    path: '/financeTable',
    Component: FinanceTable,
  },
];

export default routes;
