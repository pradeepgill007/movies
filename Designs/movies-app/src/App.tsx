import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/';
import Home from './components/home/';
import Detail from './components/details/';
import PageNotFound from './components/page404';

function App() {
  return (
    // Application router
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={Detail} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
