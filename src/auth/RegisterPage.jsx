import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RegisterPage(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function handleRegisterSubmit(e) {
    e.preventDefault()

    const trimmedUsername = username.trim()

    if (!trimmedUsername || !password || !confirmPassword) {
      alert('You must provide a username and both password fields!')
      return
    }

    if (password !== confirmPassword) {
      alert('Your passwords do not match!')
      return
    }

    if (password.length < 6) {
      alert('Your password must be at least 6 characters long!')
      return
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    const existingUser = storedUsers.find(
      user => user.username === trimmedUsername
    )

    if (existingUser) {
      alert('That username has already been taken!')
      return
    }

    const updatedUsers = [...storedUsers, { username: trimmedUsername, password }]
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    alert('You have successfully registered!')
    props.setCurrentUser(trimmedUsername)
    sessionStorage.setItem('currentUser', trimmedUsername)
    localStorage.setItem(`favorites-${trimmedUsername}`, JSON.stringify([]))
    navigate('/')
  }

  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Label htmlFor="usernameInput">Username</Form.Label>
        <Form.Control
          id="usernameInput"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Form.Label htmlFor="passwordInput">Password</Form.Label>
        <Form.Control
          id="passwordInput"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Form.Label htmlFor="confirmPasswordInput">Repeat Password</Form.Label>
        <Form.Control
          id="confirmPasswordInput"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <br />
        <Button type="submit">Register</Button>
      </Form>
    </>
  )
}

export default RegisterPage