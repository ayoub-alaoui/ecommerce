
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {ROUTE} from './constants/route'
import DetailProduct from './containers/DetailProduct/DetailProduct'
import AllProductsPage from './containers/AllProductPage/AllProductPage'
import HomePage from './containers/HomePage/HomePage'
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
            <Route exact component={DetailProduct} path="/detail_product/:category/:id" />
            <Route exact component={AllProductsPage} path="/allproducts/:title/:id" />
       
            <Route exact component={HomePage} path={ROUTE.HOME} />
            <Redirect to="/" />
       

      </Switch>
    </BrowserRouter>
  );
}

export default App;
