const React = require('react');
const ShowCard = require('./show-card.jsx');
const { object } = React.PropTypes;

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} onChange={this.handleSearchTermEvent} className='search-input' type='text' placeholer='Search' />
         </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(function(show) {
              return <ShowCard {...show} key={show.imdbID} />
            })
          }
        </div>
      </div>
    )
  }
});

module.exports = Search;
