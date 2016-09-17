const React = require('react');
const ShowCard = require('./show-card.jsx');
const data = require('../public/data.json');

const Search = function () {
  return (
    <div className='container'>
      <div className='shows'>
        {data.shows.map(function(show) {
          return <ShowCard {...show} key={show.imdbID} />
        })}
      </div>
    </div>
  )
};

module.exports = Search;
