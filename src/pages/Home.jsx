import { searchTrandMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

export const Home = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		searchTrandMovies().then(responce =>
			// console.log('responce :>> ', responce)
			setFilms(responce.data.results))
	}, []);

	return (
		<main>
			<h1>Films in trands today</h1>
			{/* //{console.log('object :>> ', searchTrandMovies())} */}
			<MoviesList films={films}/>
		</main>
	)
}