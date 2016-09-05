// FIXME: Write unit tests for this file
import React from 'react';
import { findDOMNode } from 'react-dom';
import Header from '../Header';
import Tweet from '../Tweet';
import CollectionActionCreators from '../../actions/CollectionActionCreators';

class StreamTweet extends React.Component {
  // 🚧 Constructor for Autobinding and getInitialState
  constructor(props) {
    super(props);
    this.state = {
      numberOfCharactersIsIncreasing: null,
      headerText: null,
    };
  }

  componentWillMount() {
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter',
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1,
    };
  }

  componentDidMount() {
    const componentDOMRepresentation = findDOMNode(this);
    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  componentWillReceiveProps(nextProps) {
    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText,
    });

    window.snapterest.numberOfReceivedTweets++;
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.tweet.text.length > 1);
  }

  componentDidUpdate() {
    window.snapterest.numberOfDisplayedTweets++;
  }

  componentWillUnmount() {
    delete window.snapterest;
  }

  addTweetToCollection = (tweet) => {
    CollectionActionCreators.addTweetToCollection(tweet);
  }

  render() {
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.addTweetToCollection}
        />
      </section>
    );
  }
}

StreamTweet.propTypes = {
  tweet: React.PropTypes.object,
};

export default StreamTweet;
