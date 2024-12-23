import React from 'react'
import StarshipCard from './StarshipCard'

const StarshipList = ({ starships }) => {
	return (
		<div>
			<section className="text-white my-12">
				<h2 className="text-2xl font-semibold mb-4">Starships</h2>
				<p className="mb-4">Number of results: {starships.count}</p>
				<StarshipCard starships={starships} />
			</section>
		</div>
	)
}

export default StarshipList
