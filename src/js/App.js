import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Whoops404 from './components/Whoops404';

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/list-days' component={Main} />
      <Route path="/list-days/:filter" component={Main} />
      <Route path='/add-day'  component={Main} />
      <Route path='/users' component={Main} />
      <Route path='/players' component={Main} />
      <Route path='*' component={Whoops404} />
    </Switch>
  </main>
);

export default App;
