import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Documents from './Documents';
import CreateDocument from './CreateDocument';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/documents' component={Documents}/>
      <Route path='/create' component={CreateDocument}/>
    </Switch>
  </main>
)

export default Main;
