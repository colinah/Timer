
import { Route , Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

import TimerDisplay from './containers/TimerDisplay/TimerDisplay';
import Settings from './containers/Settings/Settings';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/settings' component = {Settings} />
          <Route path='/' component = {TimerDisplay} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
