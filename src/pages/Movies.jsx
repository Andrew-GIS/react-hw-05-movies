import { useState, useEffect } from 'react';
import { searchMovieByName } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';


export const Movies = () => {
	const [films, setFilms] = useState([]);
	const [query, setQuery] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		const query = event.target.elements.query.value.trim().toLowerCase();
		console.log('query :>> ', query);
		setQuery(query);
	}

	useEffect(() => {
		//const query = query.get('query');
		if (query) {
			searchMovieByName({ query }).then(response => {
				setFilms(response.data.results);
				console.log('response.data.results :>> ', response.data.results);
			})
		}
	},
		[query]);

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h1>Search Movie</h1>
				<input type='text' name='query' autoComplete='off'/>
				<button type='submit'>Search</button>
			</form>
			{(films.length > 0) ? <MoviesList films={films}/> : (<h1>Intut your search</h1>)}
		</main>
	)
}