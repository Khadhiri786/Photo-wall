import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PhotoWall= (props)=>{
    return(<> <Link className='addIcon' to='/AddPhoto'>+</Link>
    <div className='photoGrid'>{props.posts.map((post,index)=><Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto}/>)}</div></>)
}

PhotoWall.prototype={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}
export default PhotoWall;