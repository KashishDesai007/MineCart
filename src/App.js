import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Dashboard from './Pages/DashboardPage/dashboard';
import { commonPaths } from './Utils/commonPath';
import ProductDetails from './Pages/ProductDetailsPage/productDetails';
function App() {
  return (
<Routes>
<Route path={commonPaths.dashboardPage} element={<Dashboard />} />
<Route path={commonPaths.productDetailsPage} element={<ProductDetails/>} />
</Routes>
  );
}

export default App;
