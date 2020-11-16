import React from 'react';
import serializeForm from 'form-serialize'


class AddPhoto extends React.Component
{
    handleSubmit=(event)=>{
      event.preventDefault();
      const description=event.target.elements.description.value;
      const link=event.target.elements.link.value;
      const id=Number(new Date())
      if(description && link)
      {
        this.props.addPicture(id,link,description)
        this.props.history.push('/')
      }
      // const values = serializeForm(event.target, { hash: true })  
      // if (values["imageLink"] && values["description"]) {
      // values.id = Number(new Date())
      // this.props.addPicture(values.id,values.imageLink,values.description)
      // this.props.history.push('/')
      // }
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