import axios from "axios";

const KEY = '8f7dccc9472730a8b8594c51c2e70c8f';
const mainURL = 'https://api.themoviedb.org/3/';
export const imgURL = 'https://image.tmdb.org/t/p/w500/';

axios.defaults.baseURL = mainURL;

const instance = axios.create({
	baseURL: mainURL,
	params: {
		api_key: KEY,
		language: 'en-US',
		include_adult: false,
	}
})

export async function searchTrandMovies() {
	try {
		const response = await instance.get('/trending/movie/day');
		return response;
	}
	catch (err) {
		console.error(err);
	}
}

export async function searchMovieByName({ name }) {
	try {
		const responce = await instance.get(`/search/movie?query=${name}`);
		//console.log('responce By Name :>> ', responce);
		return responce;
	} catch (error) {
		console.error(error);
	}
}

export async function searchMoviesByID({id}){
	try {
		const responce = await instance.get(`/movie/${id}`);
		//console.log('responce By ID :>> ', responce);
		return responce;
	} catch (error) {
		console.error(error);
	}
}

export async function searchCast({id}) {
	try {
		const responce = await instance.get(`movie/${id}/credits`);		
		//console.log('responce By CAST :>> ', responce);
		return responce;
	} catch (error) {
		console.error(error);
	}
}

export async function searchReviews({id}) {
	try {
		const responce = await instance.get(`movie/${id}/reviews`);
		// console.log('responce By REVIEWS :>> ', responce);
		return responce;
	} catch (error) {
		console.error(error);
	}
}