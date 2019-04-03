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
          
          <TitleBar> </TitleBar>
          <Title>THINKING ABOUT THINKING</Title>
         
          <RightPanelBox>
            "Critical Thinking means correct thinking in the pursuit of relevant and reliable knowledge about the world." 
          </RightPanelBox>

          {/* <LeftPanelBox>
            <p>8 Elements of Thought</p>
            <p>Intellectual Standards</p>
            <p>Intellectual Traits</p>
          </LeftPanelBox> */}

          <br/><br/>

          <Stripe/>
          <Stripe1/>
          <br/><br/>
          <InputBox />     
          <Icons />
          
          <br/><br/>

        </div>

    );
  }

}

export default App

const Title = styled.div`
  position: absolute;
  top: 30px;
  left: 25px;
  right: 25px;
  color: #ffffff;
  font-family: 'Corben', cursive; 
  font-weight: 700;
  font-size: 75px; 
  text-align: center;
  z-index: 2;
`;

const TitleBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  position: -webkit-sticky;
  position: sticky;   
  background-color: #41576b;
  height: 155px;
  padding: 35px 70px 35px 70px;
  margin: 35px 25 px 25px 25px;
  z-index: 1;
`;

const RightPanelBox = styled.div`
  position: relative;   
  top: 20px;
  font-family: 'Satisfy', cursive;
  font-size: 36px;
  color: #666666;
  letter-spacing: 3.5px;
  word-spacing: 4.0px;
  line-height: 1.8;
  text-align: center;
  float: right;
	width: 700px ;
	height: auto;
	border-radius: 5px;
	margin-left: auto;
	margin-right: 50px;
  margin-top: 20Px;
  z-index: 3;
`;

const LeftPanelBox = styled.div`
  position: relative;   
  /* font-family: 'Questa', cursive; */
  font-size: 35px;
  color: black;
  text-align: center;
  float: left;
  width: 700px ;
  height: auto;
  padding: 0px 0px 0px 0px;
  border-radius: 5px;
  margin-left: 50px;
  margin-right: auto;
  z-index: 4;
`;

const Stripe = styled.div`
    position: relative;   
    top: -54px;
    height: 40vh;
    transform: skewY(-9deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 30%, #41576b 80%);
`;

const Stripe1 = styled.div`
    position: relative;   
    top: -54px;
    height: 18vh;
    transform: skewY(-9deg);
    transform-origin: 0;
    background: linear-gradient(-100deg, rgba(255, 255, 255, 0) 20%, #ddecf7 70%);
`;
