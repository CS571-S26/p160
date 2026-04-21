import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutPage(props) {
  const navigate = useNavigate()

  useEffect(() => {
    //window.confirm() that displays the dialog option for ok and cancel 
    const confirmed = window.confirm('Are you sure you want to log out?')

    if (confirmed) {
      props.setCurrentUser(null)
      sessionStorage.removeItem('currentUser')
      alert('You have been logged out!')
      navigate('/')
    } else {
      navigate(-1)
    }
  }, [])

  return null
}

export default LogoutPage