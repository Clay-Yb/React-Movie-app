import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../ContextProvider';
import './Movie.scss';
const imagePath = 'https://image.tmdb.org/t/p/w500/';
const Movie = ({
	poster_path,
	id,
	vote_average,
	original_title,
	release_date,
	original_name,
	first_air_date,
}) => {
	const { setIsTv } = useGlobalContext();
	const handleClick = () => {
		if (original_title) {
			setIsTv(false);
		} else if (original_name) {
			setIsTv(true);
		}
	};

	return (
		<Link to={`/movies/${id}`} onClick={handleClick}>
			<div className="movie">
				<img src={`${imagePath}${poster_path}`} alt={original_title} />
				<div className="movie_rating">
					<FaStar />
					<span>{vote_average.toFixed(1)}</span>
				</div>
				<div className="movie_details">
					<h3>{original_title || original_name}</h3>
					<span>{release_date || first_air_date}</span>
				</div>
			</div>
		</Link>
	);
};

export default Movie;
