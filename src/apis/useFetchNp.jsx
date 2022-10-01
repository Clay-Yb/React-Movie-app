import { useEffect, useState } from 'react';
const BaseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=b933f8ed8ee6fd1530e3ec80e2490f53&language=en-US&page=1`;
const useFetchNp = () => {
	const [data, setData] = useState([]);
	const getData = async () => {
		try {
			const res = await fetch(BaseUrl);
			const data = await res.json();
			setData(data.results.slice(0, 4));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return { data };
};

export default useFetchNp;
