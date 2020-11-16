import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPost from './AddPhoto'
import {Route} from 'react-router-dom'
//import { removePost } from '../redux/actions'
class Main extends Component {
 
   
 render() {
 return ( 
 
 <div>
 <Route exact path = "/" render={() => (
 <div>
 <Title title={'Photowall'}/>
 <PhotoWall {...this.props}/>
 </div>
 )}/> 
 <Route path= "/AddPhoto" render = {({history}) => (
 <AddPost {...this.props}/>
 )}/>
 </div>
 )
 }
}
export default Main