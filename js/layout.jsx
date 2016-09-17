const React = require('react');

const Layout = function (props) {
  return (
    <div className='app-container'>
      {props.children}
    </div>
  )
}

const element = React.PropTypes.element;

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout;
