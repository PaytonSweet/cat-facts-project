import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cats, setCats] = useState([])
  const [randomFact, setRandomFact] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch cat facts
        const factsResponse = await fetch('https://catfact.ninja/facts?limit=10')
        const factsData = await factsResponse.json()

        // Generate mock data for missing fields
        const mockData = factsData.data.map((fact, index) => ({
          id: index + 1,
          name: `Cat ${index + 1}`,
          description: fact.fact,
        }))

        setCats(mockData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleRandomFact = () => {
    if (cats.length > 0) {
      const randomIndex = Math.floor(Math.random() * cats.length)
      setRandomFact(cats[randomIndex].description)
    }
  }

  return (
    <div>
      <h1>Random Cat Fact</h1>
      <button onClick={handleRandomFact}>Show Random Cat Fact</button>
      {randomFact && <p><strong>Random Fact:</strong> {randomFact}</p>}
    </div>
  )
}

export default App
