import { useEffect, useState } from 'react';
const BaseUrl = `https://api.themoviedb.org/3/movie/`;
const useFetchCrew = (id) => {
	const [crew, setCrew] = useState([]);
	const getData = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();

			setCrew(data.cast.slice(0, 5));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData(`${BaseUrl}${id}/credits?api_key=b933f8ed8ee6fd1530e3ec80e2490f53&language=en-US`);
	}, [id]);

	return { crew };
};

export default useFetchCrew;
