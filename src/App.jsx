import './App.css'
import React, { useState, useEffect } from 'react'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

const App = () => {
	const [starships, setStarships] = useState({})
	const fetchData = async (spaceShip) => {
		const data = await starshipService.show(spaceShip)
		setStarships(data)
	}
	useEffect(() => {
		const fetchDefaultData = async () => {
			const data = await starshipService.show('')
			setStarships(data)
		}
		fetchDefaultData()
	}, [])
	return (
		<>
			<main className="container mx-auto my-24 px-5 md:px-0">
				<h1 className="text-white text-4xl font-black">Star Wars API</h1>
				<StarshipSearch fetchData={fetchData} />
				<StarshipList starships={starships} />
			</main>
		</>
	)
}

export default App
