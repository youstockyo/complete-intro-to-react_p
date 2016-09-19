const React = require('react');
const Header = require('./header.jsx');

const Details = React.createClass({
  render () {
    const params = this.props.params || {};
    const { title, description, year, poster, trailer } = params;
    // destructuring: same as params.title, params.description, etc
    return (
      <div className='container'>
        <Header />
        <div className="video-info">
          <h1 className="video-title">{title}</h1>
          <h2 className="video-year">({year})</h2>
          <img src={'public/img/posters/' + poster} alt="" className="video-poster" />
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={'https://www.youtube-nocookie.com/embed/' + trailer + '?rel=0&amp;controls=0&amp;showinfo=0'} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
});

const { object } = React.PropTypes;

Details.propTypes = {
  params: object
}

module.exports = Details;
