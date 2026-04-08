import { Card, Button } from 'react-bootstrap'

function SwitchCard(props) {
  const { switchData, isFavorite, handleToggleFavorite } = props

  return (
    <Card className="h-100">
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
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={() => handleToggleFavorite(switchData)}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SwitchCard