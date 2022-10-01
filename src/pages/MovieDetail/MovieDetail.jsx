import React, { useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useFetchCrew from '../../apis/useFetchCrew';
import useFetchGT from '../../apis/useFetchGT';
import useFetchGV from '../../apis/useFetchGV';
import useFetchMD from '../../apis/useFetchMD';
import useFetchTD from '../../apis/useFetchTD';
import Actors from '../../components/Actors/Actors';
import MovieList from '../../components/MovieList/MovieList';
import { useGlobalContext } from '../../ContextProvider';
import './MovieDetail.scss';
const imagePathOriginal = 'https://image.tmdb.org/t/p/original/';
const imagePath = 'https://image.tmdb.org/t/p/w500/';
const MovieDetail = () => {
	const { id } = useParams();
	const { movieDetail = [] } = useFetchMD(id);
	const { crew = [] } = useFetchCrew(id);
	const { video = [] } = useFetchGV(id);
	const { tvDetail = [] } = useFetchTD(id);
	const { isTv } = useGlobalContext();
	const { tv = [] } = useFetchGT(id);
	const scrollRef = useRef(null);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [id]);

	if (isTv) {
		const {
			original_title,
			backdrop_path,
			genres,
			overview,
			poster_path,
			last_air_date: release_date,
			vote_average,
		} = tvDetail;
		return (
			<section className="section movie_detail" ref={scrollRef}>
				<div className="img_div">
					<img src={`${imagePathOriginal}${backdrop_path}`} alt={original_title} />
					<div className="layer"></div>
					<div className="movie_div">
						<img src={`${imagePath}${poster_path}`} alt={original_title} />
						<div className="movie_div-details">
							<h4>
								{original_title} {release_date?.slice(0, 4)}
							</h4>
							<div className="movie_div-rating">
								<FaStar />
								<span>{vote_average?.toFixed(1)}</span>

								{genres?.map((item) => (
									<span key={item.id}>{item.name}</span>
								))}
							</div>
							<p>{overview}</p>
							<h3>Casts</h3>
							<div className="casts_container">
								{crew.map((item) => (
									<Actors key={item.id} {...item} />
								))}
							</div>
						</div>
					</div>
				</div>

				<MovieList data={tv} title="Similar TVs" />
			</section>
		);
	}
	const {
		original_title,
		backdrop_path,
		genres,
		overview,
		poster_path,
		release_date,
		vote_average,
	} = movieDetail;

	return (
		<section className="section movie_detail" ref={scrollRef}>
			<div className="img_div">
				<img src={`${imagePathOriginal}${backdrop_path}`} alt={original_title} />
				<div className="layer"></div>
				<div className="movie_div">
					<img src={`${imagePath}${poster_path}`} alt={original_title} />
					<div className="movie_div-details">
						<h4>
							{original_title} {release_date?.slice(0, 4)}
						</h4>
						<div className="movie_div-rating">
							<FaStar />
							<span>{vote_average?.toFixed(1)}</span>

							{genres?.map((item) => (
								<span key={item.id}>{item.name}</span>
							))}
						</div>
						<p>{overview}</p>
						<h3>Casts</h3>
						<div className="casts_container">
							{crew.map((item) => (
								<Actors key={item.id} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>

			<MovieList data={video} title="Similar Movies" />
		</section>
	);
};

export default MovieDetail;
