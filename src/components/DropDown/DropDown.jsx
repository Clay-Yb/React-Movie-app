import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../ContextProvider';
import './DropDown.scss';
const imagePath = 'https://image.tmdb.org/t/p/w500/';
const DropDown = ({ id, poster_path, release_date, title, vote_average, overview }) => {
	const { setSearchTerm, setSearchVideos, setLoading } = useGlobalContext();

	const handleClick = () => {
		setSearchTerm('');
		setSearchVideos([]);
		setLoading(false);
	};
	return (
		<Link to={`/movies/${id}`} onClick={handleClick}>
			<div className="dropdown">
				<img src={`${imagePath}${poster_path}`} alt={title} />
				<div className="dropdown_detail">
					<h4>
						{title} {release_date?.slice(0, 4)}
					</h4>
					<p>{vote_average?.toFixed(1)}</p>
					<span>{overview?.slice(0, 50)}...</span>
				</div>
			</div>
		</Link>
	);
};

export default DropDown;
