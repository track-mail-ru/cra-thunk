import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
