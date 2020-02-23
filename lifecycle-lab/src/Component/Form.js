import React from 'react'
class Form extends React.Component{
 constructor(props){
     super(props)
     this.state ={
         text: ""
     }
     this.handleSubmit = this.handleSubmit.bind(this)
 }
  handleSubmit= (event)=>{ 
      event.preventDefault()
      this.props.addToDo(this.state.text)
      this.setState({text: ''})
    //   debugger
  } 
  handleInput=(event) =>{
    this.setState({text:event.target.value})
  
}
  render(){
      
      return(
       <form onSubmit={this.handleSubmit}>
            <input value ={this.state.text} placeholder="to do" onChange={this.handleInput}/>
        </form>
      )

  } 
}


export default Form;