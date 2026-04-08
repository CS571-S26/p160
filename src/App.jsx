import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './pages/HomePage.jsx'
import BrowsePage from './pages/BrowsePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'

function App() {
  const [favoriteSwitches, setFavoriteSwitches] = useState([])

  function handleToggleFavorite(switchObj) {
    const isFavorite = favoriteSwitches.some(
      favorite => favorite.id === switchObj.id
    )

    if (isFavorite) {
      setFavoriteSwitches(
        favoriteSwitches.filter(favorite => favorite.id !== switchObj.id)
      )
    } else {
      setFavoriteSwitches([...favoriteSwitches, switchObj])
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="browse"
          element={
            <BrowsePage
              favoriteSwitches={favoriteSwitches}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="favorites"
          element={
            <FavoritesPage
              favoriteSwitches={favoriteSwitches}
              handleToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App