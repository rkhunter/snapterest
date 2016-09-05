// FIXME: Write unit tests for this file
import { EventEmitter } from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

let collectionTweets = {};
let collectionName = 'new';

const CollectionStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCollectionTweets() {
    return collectionTweets;
  },

  getCollectionName() {
    return collectionName;
  },
});

const addTweetToCollection = (tweet) => {
  collectionTweets[tweet.id] = tweet;
};

const removeTweetFromCollection = (tweetId) => {
  delete collectionTweets[tweetId];
};

const removeAllTweetsFromCollection = () => {
  collectionTweets = {};
};

const setCollectionName = (name) => {
  collectionName = name;
};

const emitChange = () => {
  CollectionStore.emit(CHANGE_EVENT);
};

const handleAction = (action) => {
  switch (action.type) {

    case 'add_tweet_to_collection':
      addTweetToCollection(action.tweet);
      emitChange();
      break;

    case 'remove_tweet_from_collection':
      removeTweetFromCollection(action.tweetId);
      emitChange();
      break;

    case 'remove_all_tweets_from_collection':
      removeAllTweetsFromCollection();
      emitChange();
      break;

    case 'set_collection_name':
      setCollectionName(action.collectionName);
      emitChange();
      break;

    default: // ... do nothing
  }
};

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);

export default CollectionStore;
