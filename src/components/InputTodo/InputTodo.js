import React, { Component } from 'react'
import todoService from '../../services/todoServices'

class InputTodo extends Component {
    _isMounted = false
    state={
        title: '',
        body: ''
    }

    componentDidMount(){
       this._isMounted = true
     }

     handleFormSubmit = event => {
       event.preventDefault();
       const { title, body } = this.state;
   
         todoService.createTodo({ title, body })
         .then(todo => {
           if(this._isMounted){
           this.setState({
               title: '',
               body: ''
           })}
         });
     };

    handleChange = event => {
       const { name, value } = event.target;
       if(this._isMounted){
       this.setState({ [name]: value });}
     };
    
    render() {
        const {title} = this.state
        const {body} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
            <div className='inp-lab'>
                <label>Titulo Todo<strong>*</strong></label>
                <input type="text" name='title' value={title}  onChange={this.handleChange} placeholder='title' required/>
            </div>
            <div className='inp-lab'>
                <label>Describe un nuevo todo?</label>
                <input type="text" name='body' value={body}  onChange={this.handleChange} placeholder='body'/>
            </div>
            <div className='inp-lab'>
                <input type="submit" value="Create" />
            </div>
        </form>
        )
    }
}


export default InputTodo
