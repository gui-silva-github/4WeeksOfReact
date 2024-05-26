import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true})=>{

    return (

        <div className='movie-card'>

            <img src={movie.poster_path !== null ? imageUrl + movie.poster_path : 'https://i.pinimg.com/originals/ff/11/78/ff1178bf89cb845635f083aa57429c6f.jpg'} alt={movie.title}/>

            <h2>{movie.title}</h2>

            <p>
                <FaStar/> {movie.vote_average}
            </p>

            {
                showLink && <Link to={`/movie/${movie.id}`}>Details</Link>
            }

        </div>

    )

}

export default MovieCard