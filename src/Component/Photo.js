import React from 'react';
import PropTypes from 'prop-types';

const Photo=(props)=>{
    const post=props.post;
        console.log(post.imageLink)
        return(<figure className="figure">
            <img  alt={post.description} className='photo' src={post.imageLink}/>
    <figcaption><p>{post.description}</p></figcaption>
    <div className='button-container'><button className='remove-button' onClick={()=>{props.onRemovePhoto(post)}}>Remove</button></div>
    
        </figure>)
}

Photo.prototype={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Photo;