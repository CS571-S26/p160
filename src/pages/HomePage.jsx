import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import switchesImage from '../assets/switches.jpg'

function HomePage() {
  return (
    <div className="text-center">
      <h1>Welcome to SwitchSearch</h1>
      
      <img src={switchesImage} alt="Mechanical keyboard switches" className="img-fluid rounded mb-4" style={{ maxWidth: '500px' }}/>


      <p> SwitchSearch helps users explore different mechanical keyboard switches and compare their features.</p>
      <p> Explore popular mechanical keyboard switches, and have some fun!</p>
      <Button as={Link} to="/browse" variant="primary">
        Browse Switches
      </Button>
    </div>
  )
}

export default HomePage