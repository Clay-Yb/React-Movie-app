import React from 'react';
import { FaStar } from 'react-icons/fa';
import './NowPlaying.scss';
const imagePath = 'https://image.tmdb.org/t/p/original/';
const NowPlaying = ({
	index,
	original_title,
	id,
	overview,
	vote_average,
	backdrop_path,
	currentIndex,
}) => {
	let slide = 'next_slide';
	if (currentIndex === index) {
		slide = 'active_slide';
	}
	if (index === currentIndex - 1 || (currentIndex === 0 && index === 3)) {
		slide = 'prev_slide';
	}
	return (
		<div className={`now_playing ${slide}`}>
			<img src={`${imagePath}${backdrop_path}`} alt={original_title} />
			<div className="now_playing-details">
				<h3>{original_title}</h3>
				<p>{overview}</p>
				<div className="now_playing-rating">
					<FaStar />
					<span>{vote_average.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default NowPlaying;
