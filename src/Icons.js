import React from 'react'
import Card from './Card'
import { thinking } from './thinking';
import styled from 'styled-components';

class Icons extends React.Component {
  state = {
    name: '',
  }

//sets the state.name to the 'id' of the button clicked
  clickHandler = (event) => {
    const x = event.target.id
      switch(x) {
        case x:
          this.setState({name: x})
          break
        default:
          return null
    }
  }
  render() {
  //Saving state.name to a const so it'll know what Card component prop to return
    const i = this.state.name

    return (
      <div>
        
        <LargeWrapper>
          <Wrapper type = 'button' id = '0' onClick = {this.clickHandler}>Point of View</Wrapper>
          <Wrapper type = 'button' id = '1' onClick = {this.clickHandler}>Purpose</Wrapper>
          <Wrapper type = 'button' id = '2' onClick = {this.clickHandler}>Questions</Wrapper>
          <Wrapper type = 'button' id = '3' onClick = {this.clickHandler}>Assumptions</Wrapper>
          <Wrapper type = 'button' id = '4' onClick = {this.clickHandler}>Consequences</Wrapper>
          <Wrapper type = 'button' id = '5' onClick = {this.clickHandler}>Information</Wrapper>
          <Wrapper type = 'button' id = '6' onClick = {this.clickHandler}>Concepts</Wrapper>
          <Wrapper type = 'button' id = '7' onClick = {this.clickHandler}>Conclusions</Wrapper>
        </LargeWrapper>

        <div>
          {/*if the state.name is not an empty string, then display the card*/}
          {this.state.name !== '' ?
                <Card key={i}
                  id={thinking[i].id}
                  point={thinking[i].point}
                  bullet1={thinking[i].bullet1}
                  bullet2={thinking[i].bullet2}
                  bullet3={thinking[i].bullet3}
                  bullet4={thinking[i].bullet4}/>
                : null}
        </div>

      </div>

    )
  }

}

export default Icons

const Wrapper = styled.button`
  display:  inline-block;
  background-color: #717171;
  color:  white;
  font-size: 19px;
  width:185px;
  border-radius: .5rem;
  padding: 1.25rem 1rem;
  text-transform: uppercase;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  margin-left: 6px;
  margin-right: 6px;
  `;

const LargeWrapper = styled.div`
  position: relative;   
  top: -240px; 
  margin-left: 10px;
  margin-right: 10px;
 `;