import React, { useState } from 'react'

const StarshipSearch = ({ fetchData }) => {
	const [spaceShipName, setSpaceShipName] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		fetchData(spaceShipName)
		setSpaceShipName('')
	}

	return (
		<>
			<section className="my-12 text-white">
				<h2 className="text-2xl font-semibold">Search</h2>
				<form
					onSubmit={handleSubmit}
					className="flex items-center w-full justify-center gap-2 mt-4"
				>
					<input
						id="spaceShipName"
						type="text"
						value={spaceShipName}
						onChange={(event) => setSpaceShipName(event.target.value)}
						placeholder="Search Term"
						className="w-full bg-[#495057] border border-[#6c757d] rounded-md px-1 py-1 text-sm focus:outline-none placeholder:text-sm placeholder:font-extralight"
					/>
					<button
						type="submit"
						className="bg-[#121212] hover:bg-black border border-[#343a40] rounded-md px-2.5 py-1"
					>
						Search
					</button>
				</form>
			</section>
		</>
	)
}

export default StarshipSearch
