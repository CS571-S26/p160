import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginPage(props) {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  function handleLoginSubmit(e) {
    e.preventDefault()
    const username = usernameRef.current.value
    const password = passwordRef.current.value

    if (!username || !password) {
      alert('You must provide both a username and password!')
      return
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    const matchedUser = storedUsers.find(user => {
      return user.username === username && user.password === password
    })

    if (matchedUser) {
      alert('You have been successfully logged in!')
      props.setCurrentUser(username)
      sessionStorage.setItem('currentUser', username)
      navigate('/')
    } else {
      alert('Incorrect username or password!')
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Label htmlFor="usernameInput">Username</Form.Label>
        <Form.Control id="usernameInput" ref={usernameRef} />
        <Form.Label htmlFor="passwordInput">Password</Form.Label>
        <Form.Control id="passwordInput" type="password" ref={passwordRef} />
        <br />
        <Button type="submit">Login</Button>
      </Form>
    </>
  )
}

export default LoginPage
