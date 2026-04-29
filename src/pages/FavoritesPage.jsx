import { Row, Col } from 'react-bootstrap'
import SwitchCard from '../components/SwitchCard.jsx'

function FavoritesPage(props) {
  return (
    <div>
      <h1>Favorite Switches</h1>

      {props.favoriteSwitches.length > 0 ? (
        <Row>
          {props.favoriteSwitches.map(switchObj => (
            <Col key={switchObj.id} xs={12} md={6} lg={4} className="mb-4">
              <SwitchCard
                switchData={switchObj}
                currentUser={props.currentUser}
                isFavorite={true}
                handleToggleFavorite={props.handleToggleFavorite}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p>You have not added any favorite switches yet.</p>
      )}
    </div>
  )
}

export default FavoritesPage