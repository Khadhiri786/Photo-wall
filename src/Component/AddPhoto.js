import React from 'react';

class AddPhoto extends React.Component
{
    handleSubmit=(event)=>{
      event.preventDefault();
      const imageLink=event.target.elements.link.value;
      const description=event.target.elements.description.value;
      const post = {
        id: Number(new Date()),
        description: description,
        imageLink: imageLink
        }
        if (description && imageLink){
        this.props.onAddPhoto(post)
        }
    }
    render()
    {
       return(<><h1>Photo Wall</h1>
       <div className="form"><form onSubmit={this.handleSubmit}>
           <input type="text" placeholder="Link" name='link'/>
           <input type="text" placeholder="Description" name='description'/><button className='form button'>Post</button></form>
           </div></>)
    }
}
export default AddPhoto;