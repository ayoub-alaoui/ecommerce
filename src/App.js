
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {ROUTE} from './constants/route'
import CheckoutPage from './containers/CheckoutPage/CheckoutPage'
import AllProductsPage from './containers/AllProductPage/AllProductPage'
import HomePage from './containers/HomePage/HomePage'
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
            <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
            <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
       
            <Route exact component={HomePage} path={ROUTE.HOME} />
            <Redirect to="/" />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
