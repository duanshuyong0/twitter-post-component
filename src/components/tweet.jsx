import React, { Component } from 'react';
import TweetContent from './tweetContent';
import Comment from './commons/comment';
import Retweet from './commons/retweet';
import Like from './commons/like';
import Save from './commons/save';

class Tweet extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h5>Tweet</h5>
        <div className="post__content">
          <TweetContent />
        </div>
        <div className="actions">
          <Comment />
          <Retweet />
          <Like />
          <Save />
        </div>
      </React.Fragment>
    );
  }
}

export default Tweet;
