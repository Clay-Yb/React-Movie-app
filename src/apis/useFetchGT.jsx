import { useEffect, useState } from 'react';
const BaseUrl = `https://api.themoviedb.org/3/tv/`;
const useFetchGT = (id) => {
	const [tv, setTv] = useState([]);
	const getData = async (url) => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			setTv(data.results);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData(`${BaseUrl}${id}/similar?api_key=b933f8ed8ee6fd1530e3ec80e2490f53&language=en-US`);
	}, [id]);

	return { tv };
};

export default useFetchGT;
