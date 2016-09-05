// FIXME: Write unit tests for this file
import React from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from '../StreamTweet';
import Header from '../Header';

class Stream extends React.Component {
  // 🚧 Constructor for Autobinding and getInitialState
  constructor(props) {
    super(props);
    this.state = {
      tweet: null,
    };
    this.handleNewTweet = ::this.handleNewTweet;
  }

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet = (tweet) => {
    this.setState(
      {
        tweet,
      }
    );
  }
  render() {
    let tweet = this.state.tweet;
    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection}
        />
      );
    }

    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  }
}

Stream.propTypes = {
  onAddTweetToCollection: React.PropTypes.func,
};

export default Stream;
