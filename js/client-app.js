var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./my-title.js');
var div = React.DOM.div;

// Equivalent to React.createElement(MyTitle, null)
var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great!', color: 'peru'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Props are the best!', color: 'mediumaquamarine'})
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
