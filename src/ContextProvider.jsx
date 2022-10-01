import React, { createContext, useContext, useEffect, useState } from 'react';
import useFetchNp from './apis/useFetchNp';
import useFetchTM from './apis/useFetchTM';
import useFetchTTV from './apis/useFetchTTV';
const BaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=b933f8ed8ee6fd1530e3ec80e2490f53&language=en-US&query=`;
const AppContext = createContext();

export const useGlobalContext = () => {
	return useContext(AppContext);
};

const ContextProvider = ({ children }) => {
	const { data } = useFetchNp();
	const { trendingMovie } = useFetchTM();
	const { trendingTv } = useFetchTTV();
	const [isTv, setIsTv] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);
	const [searchVideos, setSearchVideos] = useState([]);

	const getData = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${BaseUrl}${searchTerm}`);
			const data = await res.json();
			setSearchVideos(data.results);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		if (!searchTerm.length) return;
		const timer = setTimeout(() => getData(), 500);
		return () => clearTimeout(timer);
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				data,
				trendingMovie,
				trendingTv,
				setIsTv,
				isTv,
				setSearchTerm,
				searchTerm,
				searchVideos,
				setSearchVideos,
				loading,
				setLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
