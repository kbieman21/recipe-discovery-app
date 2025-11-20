

import { useEffect } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import { getCategories } from './api/recipes'
import HomePage from './pages/HomePage'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import Search from './pages/Search'

function App() {
  //This was only for testing
  // useEffect(() =>{
  //   getCategories().then(res => console.log('Kibreab Testing', res.data)
  //   )
  // })
  

  return (
    <>
      <h1>Recipe Discovery App</h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/category/:name" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search/:query" element={<Search />} />

      </Routes>
    </>
  )
}

export default App
