import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SwitchCard(props) {
  const { switchData, isFavorite, handleToggleFavorite, currentUser } = props

  function handleFavoriteClick() {
    if (!currentUser) {
      alert('You must be logged in to favorite switches!')
      return
    }

    handleToggleFavorite(switchData)
  }
  // Determine the correct image source, using placeholder if not available
  // used ai assistance to handle image path correctly with Vite's import.meta.env.BASE_URL
    const imageSrc = switchData.image
    ? `${import.meta.env.BASE_URL}switch-images/${switchData.image}`
    : `${import.meta.env.BASE_URL}switch-images/placeholder.jpg`
    return (
    <Card className="h-100 switch-card border-0 shadow-sm" style={{ borderRadius: '18px' }}>
      <Card.Img
      variant="top"
      src={imageSrc}
      alt={switchData.name}
      className="switch-image"
      style={{
        height: '200px',
        objectFit: 'contain',
        padding: '1rem',
        backgroundColor: '#fff',
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '18px'
      }}
      />

      <Card.Body>
        <Card.Title>{switchData.name}</Card.Title>
        
        <Card.Subtitle className="mb-2 text-muted">
          {switchData.company}
        </Card.Subtitle>

        <Card.Text>
          <strong>Type:</strong> {switchData.type}
        </Card.Text>

        <Card.Text>
          <strong>Actuation Force:</strong> {switchData.actuationForce}
        </Card.Text>

        <Card.Text>
          <strong>Category:</strong> {switchData.category}
        </Card.Text>

        <Card.Text>{switchData.description}</Card.Text>
        <div className="d-flex gap-2 mt-3">
          <Button as={Link} to={`/switch/${switchData.id}`} variant="secondary">
          View Details
          </Button>
          
          <Button variant={isFavorite ? 'danger' : 'primary'} onClick={handleFavoriteClick}>
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            </Button>
            </div>
            </Card.Body>
            </Card>
            )
}

export default SwitchCard