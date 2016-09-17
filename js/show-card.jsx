const React = require('react');

const ShowCard = function (props) {
  return (
    <div className='show-card'>
      <img src={'public/img/posters/' + props.poster} className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.title}</h3>
        <h4 className='show-card-year'>({props.year})</h4>
        <p className='show-card-description'>{props.description}</p>
      </div>
    </div>
  )
};

const string = React.PropTypes.string;

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

module.exports = ShowCard;
