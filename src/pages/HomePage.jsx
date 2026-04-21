import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import switchesImage from '../assets/switches.jpg'

function HomePage() {
  return (
    <div className="d-flex justify-content-center">
      <Card
        className="text-center shadow-sm border-0 p-4 mt-4 fade-in"
        style={{ maxWidth: '900px', width: '100%', borderRadius: '20px' }}
      >
        <Card.Body>
          <h1 className="mb-4">Welcome to SwitchSearch</h1>

          <img
            src={switchesImage}
            alt="Mechanical keyboard switches"
            className="img-fluid rounded mb-4 switch-image"
            style={{ maxWidth: '500px' }}
          />

          <p className="fs-5 text-muted">
            Explore different mechanical keyboard switches and compare how they feel, sound, and perform.
          </p>

          <p className="text-muted">
            Search by name, filter by switch type, save favorites, and view more detailed information for each switch.
          </p>

          <Button as={Link} to="/browse" variant="dark" size="lg" className="mt-3 px-4">
            Browse Switches
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage