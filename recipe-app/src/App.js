import React, { useEffect, useState } from "react";
import { Header } from "./components/Header.js";
import getRandomRecipe from './fetch.js'

const App = () => {
  // const api_term = `https://www.themealdb.com/api/json/v1/1/search.php?s='+term`
  // const api_id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id`

  useEffect(() => {
    getRandomRecipe()
  }, [])

  return (
    <>
      <Header />
    </>
  );
}

export default App;
