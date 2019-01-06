import React from 'react';

const PostHeader = ({ postData }) => (
  <div className="post-header">
    <img className="post-header-avatar" src={postData.avatar} alt="avatar" />
    <div className="post-header-data">
      <h4 className="post-header-author">{postData.author}</h4>
      <spam className="post-header-sinceTime">{postData.sinceTime}</spam>
    </div>
  </div>
);

export default PostHeader;
