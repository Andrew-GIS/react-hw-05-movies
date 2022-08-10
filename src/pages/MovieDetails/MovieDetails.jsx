import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { searchMoviesByID, imgURL } from '../../services/api';
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from './MovieDetails.module.css';
import { Container } from '../../components/App.styled';

const MovieDetails = () => {
	const { movieId } = useParams();
	const [movieData, setMovieData] = useState();
	const location = useLocation();

	useEffect(() => {
    searchMoviesByID({ id: movieId }).then(response => {
		setMovieData(response.data);
    });
	}, [movieId]);

	if (!movieData) {
    		return;
  		}

	return (
		<>
			{/* <button className={styles.backButton} type='button'><Link className={styles.backButton} to={location.state?.from ?? '/'}><AiOutlineArrowLeft/></Link></button> */}
			<Link className={styles.backButton} to={location.state?.from??'/'}><AiOutlineArrowLeft/></Link>
			<section className={styles.mainWrapper}>	
				<img className={styles.poster} src={imgURL+movieData.backdrop_path} alt={movieData.original_title} />
				<div className={styles.secondaryWrapper}>
					<h2>{movieData.title}</h2>
					<p>User score: {movieData.vote_average}</p>
					<h3>Overview</h3>
					<p className={styles.overviewText}>{movieData.overview}</p>
					<h3>Genres</h3>
					<ul className={styles.genresWrapper}>
						{movieData.genres.map(({ id, name }) => (
						<li className={styles.genresWrapperItem} key={id}>{name}</li>
						))}
					</ul>
				</div>
			</section>
			<Container>
				<h3>Additional Information</h3>
				<div>
					<p><Link to='cast' state={{from: location.state.from}}>Cast</Link></p>
					<p><Link to='review' state={{from: location.state.from}}>Reviews</Link></p>
				</div>
				<Suspense fallback={null}>
          			<Outlet />
        		</Suspense>
			</Container>
		</>
	)
}

export default MovieDetails;