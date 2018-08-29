import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListDocuments from './ListDocuments';
import Document from './Document';

const Documents = () => (
  <Switch>
    <Route exact path='/documents' component={ListDocuments}/>
    <Route path='/documents/:id' component={Document}/>
  </Switch>
);

export default Documents;
