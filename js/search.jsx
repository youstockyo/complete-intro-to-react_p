const React = require('react');
const ShowCard = require('./show-card.jsx');
const { object } = React.PropTypes;
const Header = require('./header.jsx');

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm: searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch={true}
        />
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
