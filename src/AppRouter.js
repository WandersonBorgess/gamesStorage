import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './pages/home/Home'
import Product from './pages/product/Product'


import { fillState } from './store/ducks/cart'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fillState())
  }, [dispatch])

  return (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/inicio"  />} />
      <Route path="/inicio" component={Home} />
      <Route path={"/produto/:id"} component={Product} />
    </Switch>
  </Router>
  );
}

export default App;
