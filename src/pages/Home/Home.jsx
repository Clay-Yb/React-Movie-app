import React, { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import MovieList from '../../components/MovieList/MovieList';
import NowPlaying from '../../components/NowPlaying/NowPlaying';
import { useGlobalContext } from '../../ContextProvider';
import './Home.scss';
const Home = () => {
	const { data = [], trendingMovie, trendingTv } = useGlobalContext();
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		let newIndex = currentIndex + 1;
		if (newIndex > data.length - 1) {
			newIndex = 0;
		}
		setCurrentIndex(newIndex);
	};

	const handlePrev = () => {
		let newIndex = currentIndex - 1;
		if (newIndex < 0) {
			newIndex = data.length - 1;
		}
		setCurrentIndex(newIndex);
	};

	return (
		<section className="section home">
			<div className="now_playing-container">
				{data.map((item, index) => (
					<NowPlaying key={item.id} {...item} index={index} currentIndex={currentIndex} />
				))}
				<div className="now_playing-btns">
					<button onClick={handlePrev}>
						<IoMdArrowDropleft />
					</button>
					<button>
						<IoMdArrowDropright onClick={handleNext} />
					</button>
				</div>
			</div>
			<MovieList data={trendingMovie} title="Trending Movies" />
			<MovieList data={trendingTv} title="Trending TVs" />
		</section>
	);
};

export default Home;
