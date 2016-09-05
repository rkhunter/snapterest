import React from 'react';
import Tweet from '../Tweet';
import CollectionActionCreators from '../../actions/CollectionActionCreators';
import { listStyle, listItemStyle } from './style';

class TweetList extends React.Component {
  getListOfTweetIds = () => Object.keys(this.props.tweets);

  getTweetElement = (tweetId) => {
    const tweet = this.props.tweets[tweetId];
    const handleRemoveTweetFromCollection = this.removeTweetFromCollection;
    let tweetElement;

    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection}
        />
      );
    } else {
      tweetElement = <Tweet tweet={tweet} />;
    }

    return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
  }

  removeTweetFromCollection = (tweet) => {
    CollectionActionCreators.removeTweetFromCollection(tweet.id);
  }

  render() {
    const tweetElements = this.getListOfTweetIds().map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}

TweetList.propTypes = {
  tweets: React.PropTypes.object,
};

export default TweetList;
