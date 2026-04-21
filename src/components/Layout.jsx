import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavigationBar from './NavigationBar.jsx'
import Footer from './Footer.jsx'

function Layout(props) {
  return (
    <>
      <NavigationBar currentUser={props.currentUser} />
      <Container className="mt-4 mb-4">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
