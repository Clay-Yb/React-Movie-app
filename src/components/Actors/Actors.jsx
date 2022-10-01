import React from 'react';
import './Actors.scss';
const imagePath = 'https://image.tmdb.org/t/p/w500/';
const Actors = ({ id, original_name, profile_path }) => {
	return (
		<div className="actor">
			<img src={`${imagePath}${profile_path}`} alt={original_name} />
			<span>{original_name}</span>
		</div>
	);
};

export default Actors;
