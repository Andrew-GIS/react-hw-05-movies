import React, { Suspense } from 'react';
import { useState, useEffect , Outlet} from 'react';
//import { useSearchParams } from 'react-router-dom';
import { searchMovieByName } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import { Container } from 'components/App.styled';
import Notiflix from 'notiflix';

export const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

const Movies = () => {
	const [films, setFilms] = useState([]);
	const [query, setQuery] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		const query = event.target.elements.query.value.trim().toLowerCase();
		console.log('query :>> ', query);
		setQuery(query);
	}

	useEffect(() => {
		// if (query === prevquery) {
		// 	console.log('equal :>> ');
		// }
		if (query) {
			searchMovieByName({name: query}).then(response => {
				setFilms(response.data.results);
				if (response.data.results.length === 0) {
					console.log('films.length :>> ', films.length);
					//setFilms([]);
					return Notiflix.Notify.warning('No data to show, enter valid query', notiflixOptions,);
				}
				console.log('response.data.results :>> ', response.data.results);
				//console.log('response.data.results :>> ', response.data.results);
			})
		}
		else if (query === '') {
			return Notiflix.Notify.warning('Input your query', notiflixOptions,);
			//setFilms([]);
		}
		else {
			return;
		}
	},[query, films.length]);

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<h1>Search Movie</h1>
				<input type='text' name='query' autoComplete='off'/>
				<button type='submit'>Search</button>
			</form>
			{(films.length > 0)
				? <>
					<MoviesList films={films} />
					<Suspense fallback={null}>
            			<Outlet />
          			</Suspense>
				</>
				: (<h1>Intut your search</h1>)}
			{/* <Suspense fallback={null}>
            <Outlet />
          </Suspense> */}
		</Container>
	)
}

export default Movies;