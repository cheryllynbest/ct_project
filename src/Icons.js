import React from 'react'
import Card from './Card'
import CardList from './CardList'
import { thinking } from './thinking';

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
        <button type = 'button' id = '0' onClick = {this.clickHandler}>Point of View</button>
        <button type = 'button' id = '1' onClick = {this.clickHandler}>Purpose</button>
        <button type = 'button' id = '2' onClick = {this.clickHandler}>Questions</button>
        <button type = 'button' id = '3' onClick = {this.clickHandler}>Assumptions</button>
        <button type = 'button' id = '4' onClick = {this.clickHandler}>Consequences</button>
        <button type = 'button' id = '5' onClick = {this.clickHandler}>Information</button>
        <button type = 'button' id = '6' onClick = {this.clickHandler}>Concepts</button>
        <button type = 'button' id = '7' onClick = {this.clickHandler}>Conclusions</button>
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
