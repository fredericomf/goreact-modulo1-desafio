import React from 'react';

const PostHeader = ({ postData }) => (
  <React.Fragment>
    <img className="post-header-avatar" src={postData.avatar} alt="avatar" />
    <h4 className="post-header-author">{postData.author}</h4>
    <spam className="post-header-sinceTime">{postData.sinceTime}</spam>
  </React.Fragment>
);

export default PostHeader;
