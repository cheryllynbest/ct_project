import React from 'react';
import styled from 'styled-components';

const Card = ( { point, bullet1, bullet2, bullet3, bullet4 } ) => {
	
	return (
		<div>	
			<QuestionMark>
				<img alt= 'photo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Replacement_character.svg/220px-Replacement_character.svg.png' />
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


{/* <div className='tc bg-light-yellow dib br3 ma2 grow bw2 shadow5'> */}
// the above used to show the cards yellow

const QuestionMark = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	width: auto;
	align-content: center;
	position: relative;   
	top: -200px; 
`;

const AwesomeText = styled.div`
	position: relative;   
	top: -100px;
`;