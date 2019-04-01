import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import InputBox from './InputBox';
import Icons from './Icons'
import { thinking } from './thinking';
import styled from 'styled-components';


class App extends React.Component {

  render(){
    return (

        <div className ='tc'>
          <div className = 'heading'>
            <Title>WUTS YUR Problem?</Title>
          </div>
            <Stripe/>
            <Stripe1/>
           
            <Icons />
          
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

    );
  }

}

export default App

const Title = styled.div`
  color: white;
  background-color: #41576b;
  height: 200px;
  font-family: URW Gothic L, sans-serif;
  font-size: 50px; 
  text-align: center;
  padding: 35px 70px 35px 70px;
  margin: auto;
`;

const Stripe = styled.div`
    height: 35vh;
    transform: skewY(-10deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 30%, #41576b 80%);
`;

const Stripe1 = styled.div`
    height: 20vh;
    transform: skewY(-10deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 30%, #ddecf7 80%);
`;
