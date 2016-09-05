// FIXME: Write unit tests for this file
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from '../CollectionControls';
import TweetList from '../TweetList';
import Header from '../Header';
import CollectionUtils from '../../utils/CollectionUtils';
import CollectionStore from '../../stores/CollectionStore';

class Collection extends React.Component {
  // 🚧 Constructor for Autobinding and getInitialState
  constructor(props) {
    super(props);
    this.state = {
      collectionTweets: CollectionStore.getCollectionTweets(),
    };
    this.onCollectionChange = ::this.onCollectionChange;
  }

  componentDidMount() {
    CollectionStore.addChangeListener(this.onCollectionChange);
  }

  componentWillUnmount() {
    CollectionStore.removeChangeListener(this.onCollectionChange);
  }

  onCollectionChange() {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets(),
    });
  }

  createHtmlMarkupStringOfTweetList = () => {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.state.collectionTweets} />
    );

    const htmlMarkup = {
      html: htmlString,
    };

    return JSON.stringify(htmlMarkup);
  }

  render() {
    const collectionTweets = this.state.collectionTweets;
    const numberOfTweetsInCollection =
    CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
    let htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarkupStringOfTweetList();

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
          />

          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
}

export default Collection;
