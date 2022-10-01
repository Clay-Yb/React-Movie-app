import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies/:id" element={<MovieDetail />} />
			</Routes>
		</>
	);
}

export default App;
