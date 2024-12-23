import React from 'react'

const StarshipCard = ({ starships }) => {
	return (
		<div className="md:grid grid-cols-3 flex flex-col gap-3">
			{starships.results
				? starships.results.map((starship, index) => (
						<div
							key={index}
							className="bg-[#343a40] border border-[#6c757d] rounded-md p-4 flex flex-col gap-2"
						>
							<h4 className="font-semibold text-xl mb-2">{starship.name}</h4>
							<h5>
								<strong>Class</strong> <br />
								<span className="text-base font-light">
									{starship.starship_class}
								</span>
							</h5>
							<h5>
								<strong>Manufacturer</strong> <br />
								<span className="text-base font-light">
									{starship.manufacturer}
								</span>
							</h5>
							<h5>
								<strong>Model</strong> <br />
								<span className="text-base font-light">{starship.model}</span>
							</h5>
						</div>
				  ))
				: '... Loading'}
		</div>
	)
}

export default StarshipCard
