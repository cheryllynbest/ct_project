import React from 'react';
import Card from './Card';
import CardList from './CardList';
import InputBox from './InputBox';
import { thinking } from './thinking';



class App extends React.Component {

  render(){
    return (
    <div className ='tc'>
      <h1>WUTS YUR PROBLEM</h1>
      <InputBox />
      <CardList thinking ={thinking} />
    </div>
    );
  }
  
}

export default App