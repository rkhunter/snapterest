function getNumberOfTweetsInCollection(collection) {
  const TweetUtils = require('./TweetUtils');

  const listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
  return listOfCollectionTweetIds.length;
}
function isEmptyCollection(collection) {
  return (getNumberOfTweetsInCollection(collection) === 0);
}
module.exports = {
  getNumberOfTweetsInCollection,
  isEmptyCollection,
};
