import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

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
        <Input
          className = 'input'
          type = 'text'
          placeholder = 'State Your Struggles'
          name = 'userProblem'
          value = {this.state.userProblem}
          onChange = {this.inputProblem}
          onKeyPress = {this.keyHandler}/>
       <Button
         type = 'button'
         name = 'problemSubmit'
         value = {this.state.userSubmit}
         onClick = {this.clickHandler}>
             Submit
       </Button>
       <h1 className = 'userProblem'>{this.state.userSubmit}</h1>
     </div>
   )
 }
}
export default InputBox

const Input = styled.input`
  display:  block;
  text-align: center;
  width:  75%;
  margin-bottom: 1rem;  
  margin-left:auto;
  margin-right:auto;
  box-sizing: border-box;
  padding: 1.25rem 1rem;
  border: 1px solid transparent;
  box-shadow: 0 1px 6px rgba(0,0,0,0.3);
`;

const Button = styled.button`
  display:  block;
  background-color: #bbb;
  color:  white;
  border: none;
  width:  25%;
  padding: 1.25rem 1rem;
  box-sizing: border-box;
  border-radius:  0.25rem;
  text-transform: uppercase;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  margin: 1rem 0.5rem;  
  margin-left:auto;
  margin-right:auto;
  `;