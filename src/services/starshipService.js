const URL = `https://swapi.py4e.com/api/starships`

export const show = async (name) => {
	try {
		const apiUrl = `${URL}?search=${name}`
		const response = await fetch(apiUrl)
		const result = await response.json()
		console.log('Result:', result)
		return result
	} catch (error) {
		console.error(error)
	}
}
