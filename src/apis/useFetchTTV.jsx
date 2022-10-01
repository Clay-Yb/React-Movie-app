import { useEffect, useState } from 'react';
const BaseUrl = `https://api.themoviedb.org/3/trending/tv/week?api_key=b933f8ed8ee6fd1530e3ec80e2490f53`;
const useFetchTTV = () => {
	const [trendingTv, setTrendingTv] = useState([]);
	const getData = async () => {
		try {
			const res = await fetch(BaseUrl);
			const data = await res.json();

			setTrendingTv(data.results);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return { trendingTv };
};

export default useFetchTTV;
