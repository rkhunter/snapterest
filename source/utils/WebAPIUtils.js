import SnapkiteStreamClient from 'snapkite-stream-client';
import TweetActionCreators from '../actions/TweetActionCreators';

const initializeStreamOfTweets = () => {
  SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
};

module.exports = {
  initializeStreamOfTweets,
};
