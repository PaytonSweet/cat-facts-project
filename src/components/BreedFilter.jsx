function BreedFilter({ breeds, onFilter }) {
  return (
    <div className="breed-filter">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="All">All</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BreedFilter