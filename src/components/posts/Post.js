import React from 'react';
import PostHeader from './PostHeader';

const Post = ({ postData }) => (
  <div className="post">
    <PostHeader postData={postData} />
    <p className="post-text">{postData.post}</p>
  </div>
);

export default Post;
