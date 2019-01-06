import React from 'react';
import PostHeader from './PostHeader';

const Post = ({ postData }) => (
  <React.Fragment>
    <PostHeader postData={postData} />
    <p className="post-text">{postData.post}</p>
  </React.Fragment>
);

export default Post;
