import React from 'react';

const buttonStyle = {
  margin: '10px 10px 10px 0',
};

class Button extends React.Component {
  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}
      >
          {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  handleClick: React.PropTypes.func,
  label: React.PropTypes.string,
};

export default Button;
