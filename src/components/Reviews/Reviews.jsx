import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchReviews } from '../../services/api';

const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState();

	useEffect(() => {
		if (movieId) {
			searchReviews({ id: movieId })
				.then(response => {
					setReviews(response.data);
				})
				.catch(err => console.error(err));
		}
	}, [movieId]);
	
if (reviews === undefined) {
    		return;
  		}

	return (
		<ul>
			{(reviews.results.length > 0) ? 
			reviews.results.map(review => {
				return (
					<li key={review.id}>
						<h3>{review.author}</h3>
						<p>{review.content}</p>
					</li>
				);
			})
				: <h2>No Reviews</h2>
			}
			
		</ul>
	);
}

export default Reviews;