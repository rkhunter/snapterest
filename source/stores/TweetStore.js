// FIXME: Write unit tests for this file
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';

let tweet = null;

function setTweet(receivedTweet) {
  tweet = receivedTweet;
}

const TweetStore = assign({}, EventEmitter.prototype, {

  addChangeListener: (callback) => {
    this.on('change', callback);
  },

  removeChangeListener: (callback) => {
    this.removeListener('change', callback);
  },

  getTweet: () => tweet,
});

function emitChange() {
  TweetStore.emit('change');
}

function handleAction(action) {
  if (action.type === 'receive_tweet') {
    setTweet(action.tweet);
    emitChange();
  }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);

export default TweetStore;
