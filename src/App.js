import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Navbar,
  Sidebar,
  Footer
} from './components';

import { 
  Home, 
  About,
  Products,
  SelectedProduct,
  Cart,
  Checkout,
  Error,
  PrivateRoute
 } from './pages';

function App() {
  return (
    <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id" children={<SelectedProduct />} />
          <Route exact path="/cart">
            <Cart />
          </Route>
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
