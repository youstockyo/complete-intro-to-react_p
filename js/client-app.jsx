const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./search.jsx');
const Landing = require('./landing.jsx');
const Layout = require('./layout.jsx');
const Details = require('./details.jsx');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { shows } = require('../public/data.json');

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id);

    console.log('nextState', nextState, 'showArray', showArray);

    if (showArray.length < 1) {
      return replace('/');
    }

    Object.assign(nextState.params, showArray[0]);
    console.log('assignshow done');
    return nextState;
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
