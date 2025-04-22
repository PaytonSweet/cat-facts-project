import { useState, useEffect } from 'react'
import CatGallery from './components/CatGallery'
import BreedFilter from './components/BreedFilter'
import './App.css'

function App() {
  const [cats, setCats] = useState([])
  const [breeds, setBreeds] = useState([])
  const [filteredCats, setFilteredCats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-store-products')
        const data = await response.json()
        setCats(data)
        setFilteredCats(data)
        const uniqueBreeds = [...new Set(data.map((cat) => cat.category))]
        setBreeds(uniqueBreeds)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleFilter = (breed) => {
    if (breed === 'All') {
      setFilteredCats(cats)
    } else {
      setFilteredCats(cats.filter((cat) => cat.category === breed))
    }
  }

  return (
    <div>
      <h1>Cat Gallery</h1>
      <BreedFilter breeds={breeds} onFilter={handleFilter} />
      <CatGallery cats={filteredCats} />
    </div>
  )
}

export default App
