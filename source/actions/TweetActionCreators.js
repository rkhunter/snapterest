// FIXME: Write unit tests for this file
import AppDispatcher from '../dispatcher/AppDispatcher';

const receiveTweet = (tweet) => {
  const action = {
    type: 'receive_tweet',
    tweet,
  };

  AppDispatcher.dispatch(action);
};

module.exports = {
  receiveTweet,
};
