import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import { searchCast, imgURL } from '../../services/api';
import { CastList, CastItem, CastImage} from "./Cast.styled";

const Cast = () => {
	const { movieId } = useParams();
	const [movieCast, setMovieCast] = useState();

	useEffect(() => {
		// console.log('Cast USEEFF :>>');
		if (movieId) {
			searchCast({ id: movieId })
				.then(response => {
					setMovieCast(response.data);
				})
				.catch(err => console.error(err));
		}
	}, [movieId]);

	if (movieCast === undefined) {
    		return;
  		}

	return (
		<CastList>
			{movieCast.cast.map(actor => {
				return (
					<CastItem key={actor.id}>
						{actor.profile_path && (
							<CastImage src={imgURL + actor.profile_path} alt={actor.name}/>
						)}
						<h3>{actor.name}</h3>
						<p style={{ margin: 2 + 'px'}}>Character: {actor.character}</p>
					</CastItem>
				);
			})}
		</CastList>	
	);
}

export default Cast;