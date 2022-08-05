import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmList, FilmItem } from './MoviesList.styled';

const MoviesList = ({ films }) => {
	const location = useLocation();
	return (
		<FilmList>
			{films.map(film => {
				return (
					<li key={film.id}>
						<FilmItem to={`/movies/${film.id}`} state={{from: location}}>
							{film.original_title}
						</FilmItem>
					</li>
				)
			})}
		</FilmList>
	);
}

export default MoviesList;