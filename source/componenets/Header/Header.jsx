import React from 'react';

const headerStyle = require('./style');

class Header extends React.Component {
  // 🚧 Constructor for Autobinding and getInitialState
  constructor(props) {
    super(props);
    this.state = {
      text: 'Default header',
    };
  }

  render() {
    return (
      <h2 className="header" style={headerStyle}>{this.props.text}</h2>
    );
  }
}

Header.propTypes = {
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
};

export default Header;
