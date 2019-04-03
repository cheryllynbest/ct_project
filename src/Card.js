import React from 'react';
import styled from 'styled-components';

const Card = ( { point, bullet1, bullet2, bullet3, bullet4 } ) => {
	
	return (
		<div>	
			<QuestionMark>
				<img alt='photo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Replacement_character.svg/220px-Replacement_character.svg.png' />
			</QuestionMark>	

			<AwesomeText>
				<h2> { point } </h2>
				<p> { bullet1 } </p>
				<p> { bullet2 } </p>
				<p> { bullet3 } </p>
				<p> { bullet4 } </p>
			</AwesomeText>

		</div>	
	)
}

export default Card

const QuestionMark = styled.div`
	position: relative;   
	float: left;
	top: -370px;
	width: 700px;
	height: 250px;
	text-align: center;
`;

const AwesomeText = styled.div`
	position: relative;   
	float: right;
	top: -370px;
	width: 900px;
	height: 250px;
	text-align: left;
	/* font-family: 'Questa', cursive; */
  	font-size: 18px;
  	color: black;
`;