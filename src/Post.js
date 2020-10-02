import React from 'react';
import './Post.css';
import Avator from '@material-ui/core/Avatar';


function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
          <div className="post__header">
              <Avator 
                className="post__avator"
                alt=""
                src="" 
                />
              <h3>{username}</h3>
          </div>
            {/* header -> avator + username */}
           
            {/* image */}
            <img className="post__image" src={imageUrl}
            alt = "" / >
            {/* username + caption */}
            <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
        </div>
    )
}

export default Post
