import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
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
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('query') ?? '';

	const handleSubmit = event => {
		event.preventDefault();
		const query = event.target.elements.query.value.trim().toLowerCase();
		console.log('query :>> ', query);
		setSearchParams(query !== '' ? { query: query } : {});
	}

	useEffect(() => {
		console.log('useEffect Movives:>> ');
		if (query === '') {
			return Notiflix.Notify.warning('Input your query', notiflixOptions,);
		}
		searchMovieByName({name: query}).then(response => {
				setFilms(response.data.results);
				if (response.data.results.length === 0) {
					return Notiflix.Notify.warning('No data to show, enter valid query', notiflixOptions,);
				}
			})
	},[query]);

	return (
		
		<Container>
			{console.log('films :>> ', films)}
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