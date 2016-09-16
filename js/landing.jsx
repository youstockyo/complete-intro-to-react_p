const React = require('react');

const Landing = function () {
  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>s-video</h1>
        <input className='search' type='text' placeholder='Search' />
        <button className='browse-all'> or Browse All</button>
      </div>
    </div>
  )
};

module.exports = Landing;
