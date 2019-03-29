import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardList = ( {thinking} ) => {
	return (
		<div>
		{
		thinking.map((user, i) => {
		return ( 
			<Card 
			key={i}
			id={thinking[i].id} 
			point={thinking[i].point} 
			bullet1={thinking[i].bullet1} 
			bullet2={thinking[i].bullet2} 
			bullet3={thinking[i].bullet3}
			
			/>
			);
	})
	}
	</div>
	);

}

export default CardList
