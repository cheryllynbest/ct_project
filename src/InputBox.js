import React from 'react';

class InputBox extends React.Component {
 state = {
   userProblem:'',
   userSubmit:'',
 }
 inputProblem = (event) => {
   const { name, value } = event.target
   this.setState({[name]: value})
 }
 clickHandler = () => {
   let x = this.state.userProblem
   this.setState({userSubmit: x})
   this.setState({userProblem: ''})
 }
 keyHandler = (event) => {
   let y = this.state.userProblem
   if (event.key === 'Enter') {
     this.setState({userSubmit: y})
     this.setState({userProblem: ''})
   }
 }
 render(){
   return (
     <div>
       <input
         className = 'input'
         type = 'text'
         placeholder = 'state your struggles'
         name = 'userProblem'
         value = {this.state.userProblem}
         onChange = {this.inputProblem}
         onKeyPress = {this.keyHandler}/>
       <button
         type = 'button'
         name = 'problemSubmit'
         value = {this.state.userSubmit}
         onClick = {this.clickHandler}>
             Submit
       </button>
       <h1 className = 'userProblem'>{this.state.userSubmit}</h1>
     </div>
   )
 }
}
export default InputBox

