const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./landing.jsx');
const { Router, Route, hashHistory } = require('react-router');

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Landing} />
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
