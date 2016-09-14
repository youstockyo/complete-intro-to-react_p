var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
	render: function() {
		return (
			div(null,
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
});

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