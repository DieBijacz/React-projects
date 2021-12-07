import React from 'react'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const noImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

const setVoteColor = (vote) => {
    if (vote > 7) {
        return 'green'
    } else {
        return 'red'
    }
}

export const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={poster_path ? (IMGPATH + poster_path) : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'} alt={title} />
        <div className="movie-body">
            <p>{title}</p>
            <span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="overview">
            <h4>{title}</h4>
            <p>{overview}</p>
        </div>
    </div>
)
