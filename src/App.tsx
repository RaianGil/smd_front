import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import Routes from './controllers/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () =>(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

export default App;
