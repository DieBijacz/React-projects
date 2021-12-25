import React from 'react'
import getRandomRecipe from '../fetch.js'

export const Recipe = ({ title, img }) => {
    return (
        <div className='meal'>
            <h1>{title}</h1>
            <img src={img} alt="" />
        </div>
    )
}
