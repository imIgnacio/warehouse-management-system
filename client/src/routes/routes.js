import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import CreateProducts from '../pages/CreateProducts';
import EditProducts from '../pages/EditProducts';
import DeleteProducts from '../pages/DeleteProducts';
import FinanceTable from '../pages/FinanceTable';
import NewSale from '../pages/NewSale';

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
    path: '/newSale',
    Component: NewSale,
  },
  {
    path: '/financeTable',
    Component: FinanceTable,
  },
];

export default routes;
