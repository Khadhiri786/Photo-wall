import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PhotoWall= (props)=>{
    console.log(props)
    return(<> <Link className='addIcon' to='/AddPhoto'>+</Link>
    <div className='photoGrid'> {props.posts.sort(function(x, y){return y.id - x.id;}).map((post, i) => {
 return <Photo key={i} post={post} i={i} {...props}/>
 })}</div></>)
}

PhotoWall.prototype={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}
export default PhotoWall;