import React, { useEffect, useState } from "react";
import { Favorites } from "./components/Favorites.js";
import { Header } from "./components/Header.js";
import { Recipe } from "./components/Recipe.js";
import getRandomRecipe from './fetch.js'

const App = () => {
  // const api_term = `https://www.themealdb.com/api/json/v1/1/search.php?s='+term`
  // const api_id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id`

  const [meal, setMeal] = useState([])

  useEffect(() => {
    getRandomRecipe(setMeal)
  }, [])

  return (
    <>
      <Header />
      <Recipe title={meal.strMeal} img={meal.strMealThumb} />
      <div className="hero">
        <Favorites />
      </div>
    </>
  );
}

export default App;
