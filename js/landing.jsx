const React = require('react');
const {Link} = require('react-router');


const Landing = function () {
  return (
    <div className='home-info'>
      <h1 className='title'>s-video</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'> or Browse All</Link>
    </div>
  )
};

module.exports = Landing;
