import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HomePage from "./pages/HomePage.jsx";
import BrowsePage from "./pages/BrowsePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LoginPage from "./auth/LoginPage.jsx";
import RegisterPage from "./auth/RegisterPage.jsx";
import LogoutPage from "./auth/LogoutPage.jsx";
import Layout from "./components/Layout.jsx";
import SwitchDetailsPage from './pages/SwitchDetailsPage.jsx'

function App() {
  const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('currentUser'))
  const [favoriteSwitches, setFavoriteSwitches] = useState([])

  useEffect(() => {
    if (currentUser) {
      const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${currentUser}`)) || []
      setFavoriteSwitches(storedFavorites)
    } else {
      setFavoriteSwitches([])
    }
  }, [currentUser])

  function handleToggleFavorite(switchObj) {
    if (!currentUser) {
      alert('You must be logged in to favorite switches!')
      return
    }

    const isFavorite = favoriteSwitches.some(
      favorite => favorite.id === switchObj.id
    )

    let updatedFavorites

    if (isFavorite) {
      updatedFavorites = favoriteSwitches.filter(
        favorite => favorite.id !== switchObj.id
      )
    } else {
      updatedFavorites = [...favoriteSwitches, switchObj]
    }

    setFavoriteSwitches(updatedFavorites)
    localStorage.setItem(`favorites-${currentUser}`, JSON.stringify(updatedFavorites))
  }

  return (
    <Routes>
      <Route
        element={
          <Layout
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      >
        <Route index element={<HomePage />} />
        <Route
          path="browse"
          element={
            <BrowsePage
              currentUser={currentUser}
              favoriteSwitches={favoriteSwitches}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="favorites"
          element={
            <FavoritesPage
              currentUser={currentUser}
              favoriteSwitches={favoriteSwitches}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="login"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="register"
          element={<RegisterPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="logout"
          element={<LogoutPage setCurrentUser={setCurrentUser} />}
        />
        <Route
        path="switch/:id"
        element={
        <SwitchDetailsPage currentUser={currentUser} favoriteSwitches={favoriteSwitches} handleToggleFavorite={handleToggleFavorite}/>
        }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
