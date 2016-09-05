// FIXME: Write unit tests for this file
import React from 'react';
import Header from '../Header';
import Button from '../Button';
import CollectionRenameForm from '../CollectionRenameForm';
import CollectionExportForm from '../CollectionExportForm';
import CollectionActionCreators from '../../actions/CollectionActionCreators';
import CollectionStore from '../../stores/CollectionStore';

class CollectionControls extends React.Component {

  // 🚧 Constructor for Autobinding and getInitialState
  constructor(props) {
    super(props);
    this.state = {
      isEditingName: false,
    };
    this.getHeaderText = ::this.getHeaderText;
    this.toggleEditCollectionName = ::this.toggleEditCollectionName;
  }

  getHeaderText = () => {
    const numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    let text = numberOfTweetsInCollection;
    const name = CollectionStore.getCollectionName();

    if (numberOfTweetsInCollection === 1) {
      text = `${text} tweet in your`;
    } else {
      text = `${text} tweets in your`;
    }

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  }

  toggleEditCollectionName = () => {
    this.setState({
      isEditingName: !this.state.isEditingName,
    });
  }

  removeAllTweetsFromCollection = () => {
    CollectionActionCreators.removeAllTweetsFromCollection();
  }

  render() {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName}
        />

        <Button
          label="Empty collection"
          handleClick={this.removeAllTweetsFromCollection}
        />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
}

CollectionControls.propTypes = {
  numberOfTweetsInCollection: React.PropTypes.number,
  htmlMarkup: React.PropTypes.string,
};

export default CollectionControls;
