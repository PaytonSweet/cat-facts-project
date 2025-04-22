function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <h3>{cat.name}</h3>
      <p><strong>Fun Fact:</strong> {cat.description}</p>
    </div>
  )
}

export default CatCard