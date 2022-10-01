import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.scss';
const MovieList = ({ data, title }) => {
	return (
		<div className="movie_list">
			<h1>{title}</h1>
			<div className="movie_list-container">
				{data.map((item) => (
					<Movie key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default MovieList;
