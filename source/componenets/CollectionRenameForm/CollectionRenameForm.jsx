// FIXME: Write unit tests for this file
import React from 'react';
import Header from '../Header';
import Button from '../Button';
import CollectionActionCreators from '../../actions/CollectionActionCreators';
import CollectionStore from '../../stores/CollectionStore';

const inputStyle = {
  marginRight: '5px',
};

class CollectionRenameForm extends React.Component {
  // 🚧 Constructor for Autobinding ancld getInitialState
  constructor(props) {
    super(props);
    this.state = {
      inputValue: CollectionStore.getCollectionName(),
    };
  }

  componentDidMount() {
    this.collectionName.focus();
  }

  setInputValue = (inputValue) => {
    this.setState({
      inputValue,
    });
  }

  handleInputValueChange = (event) => {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const collectionName = this.state.inputValue;
    CollectionActionCreators.setCollectionName(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  handleFormCancel = (event) => {
    event.preventDefault();
    const collectionName = this.props.name;
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <Header text="Collection name:" />

        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref={(c) => { this.collectionName = c; }}
          />
        </div>

        <Button label="Change" handleClick={this.handleFormSubmit} />
        <Button label="Cancel" handleClick={this.handleFormCancel} />
      </form>
    );
  }
}

CollectionRenameForm.propTypes = {
  name: React.PropTypes.string,
  onChangeCollectionName: React.PropTypes.func,
  onCancelCollectionNameChange: React.PropTypes.func,
};

export default CollectionRenameForm;
