import React from 'react'

const Card = ( { point, bullet1, bullet2, bullet3 } ) => {
	
	return (
		<div className='tc bg-light-yellow dib br3 ma2 grow bw2 shadow5'>
			<img alt= 'photo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Replacement_character.svg/220px-Replacement_character.svg.png' />
			<div>
				<h2> { point } </h2>
				<p> { bullet1 } </p>
				<p> { bullet2 } </p>
				<p> { bullet3 } </p>
			</div>

		</div>
	)
}

export default Card
