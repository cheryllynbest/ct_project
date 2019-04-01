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

        <div>
          
          <Title>What's Your Problem?</Title>
          
          

          <RightPanelBox>
            <p>"Critical Thinking  
            Correct thinking in the pursuit of relevant and reliable knowledge about the world." 
            </p>
          </RightPanelBox>

          <Stripe/>
          <Stripe1/>
          <InputBox />     
           
          <Icons />
          
          <br/><br/>

        </div>

    );
  }

}

export default App

const Title = styled.div`
  color: #FFFFFF;
  opacity: 1.0;
  background-color: #41576b;
  height: 160px;
  font-family: Bradley Hand, cursive;
  font-size: 75px; 
  font-stretch: extra-expanded;
  text-align: center;
  padding: 35px 70px 35px 70px;
  margin: 40px 25 px 25px 25px;
`;

const RightPanelBox = styled.div`
  position: relative;   
  top: -30px;
  font-family: "Brush Script MT";
  font-style: normal; 
  font-variant: normal;
  font-weight: 400;
  font-size: 34px;
  color: #666666;
  letter-spacing: 3px;
  word-spacing: 3.8px;
  text-align: center;
  position: relative;
  float: right;
	width: 700px ;
	height: auto;
	border-radius: 5px;
	padding: 10px 10px 10px;
	margin-left: auto;
	margin-right: 50px;
	margin-top: 20Px;
`;

const Stripe = styled.div`
    height: 33vh;
    transform: skewY(-10deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 30%, #41576b 80%);
`;

const Stripe1 = styled.div`
    height: 18vh;
    transform: skewY(-10deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 30%, #ddecf7 80%);
`;
