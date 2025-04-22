import CatCard from './CatCard'

function CatGallery({ cats }) {
  return (
    <div className="cat-gallery">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  )
}

export default CatGallery