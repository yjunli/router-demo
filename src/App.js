import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// 引入展示组件
import { About, Home, NotFound404, Details, Log, Contact, Products, Events } from './Page/pages';

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/contact' component={Contact} />
          <PrivateRoute path='/products' component={Products} />
          <PrivateRoute path='/events' component={Events} />
          <Route path='/log' component={Log} />
          <Redirect from='/history' to='about/history'></Redirect>
          <Route path='/details/:type' component={Details}></Route>
          <Route component={NotFound404} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App