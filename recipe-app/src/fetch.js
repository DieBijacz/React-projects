export default async function getRandomRecipe() {
    const api = `https://www.themealdb.com/api/json/v1/1/random.php`

    const resp = await fetch(api)
    const data = await resp.json()
    console.log(data.meals[0]);
    return data.meals[0]
  }