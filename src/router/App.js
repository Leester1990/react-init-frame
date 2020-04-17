import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch }from "react-router-dom"
import store from '../store';

const CommonHeader = lazy(() => import('../components/header/index'));

const AccountLogin = lazy(() => import('../pages/account/index'));
const WebHome = lazy(() => import('../pages/home/index'));
const WebCart = lazy(() => import('../pages/cart/index'));
const WebMy = lazy(() => import('../pages/my/index'));
const WebOrder = lazy(() => import('../pages/order/index'));

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
              <CommonHeader/>
              <Switch>
                <Route path="/account/login" exact component={AccountLogin} />
                <Route path="/" exact component={WebHome} />
                <Route path="/cart" exact component={WebCart} />
                <Route path="/my" exact component={WebMy} />
                <Route path="/order" exact component={WebOrder} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
