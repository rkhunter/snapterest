import React from 'react';
import { tweetStyle, imageStyle } from './style';

class Tweet extends React.Component {
  handleImageClick = () => {
    const tweet = this.props.tweet;
    const onImageClick = this.props.onImageClick;

    if (onImageClick) {
      onImageClick(tweet);
    }
  }

  render() {
    const tweet = this.props.tweet;
    let tweetMediaUrl = tweet.media[0].url;

    return (
      <div style={tweetStyle}>
        <img
          src={tweetMediaUrl}
          onClick={this.handleImageClick}
          style={imageStyle}
          alt=""
        />
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet(properties, propertyName) {
    const tweet = properties[propertyName];

    if (!tweet) {
      return new Error('Tweet must be set.');
    }

    if (!tweet.media) {
      return new Error('Tweet must have an image.');
    }

    return null;
  },
  onImageClick: React.PropTypes.func,
};

export default Tweet;
