const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./search.jsx');
const Landing = require('./landing.jsx');
const Layout = require('./layout.jsx');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
      </Route>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
