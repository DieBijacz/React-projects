import React from 'react'
import getRandomRecipe from '../fetch.js'

export const Header = () => {
    return (
        <header>
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Search for recipe" />
                <button onClick={(e) => {
                    e.preventDefault()
                    getRandomRecipe()
                }} className="btn search-btn" type="submit">Search</button>
            </form>
        </header>
    )
}
