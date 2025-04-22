function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} className="cat-image" />
      <h3>{cat.name}</h3>
      <p><strong>Breed:</strong> {cat.category}</p>
      <p><strong>Fun Fact:</strong> {cat.description}</p>
    </div>
  )
}

export default CatCard