import React from 'react'
class Form extends React.Component{
  state={
      text: ""
  } 
  render(){
      return(
        <form onSubmit={this.handleSubmit}></form>
      )

  } 
}


export default Form;