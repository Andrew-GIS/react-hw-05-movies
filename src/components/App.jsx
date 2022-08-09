import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

//try with direct
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path='review' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Route>
    </Routes>
  );
};

// const createAsyncComponent = (path) => lazy(() => import(path));

// import { Home } from '../pages/Home';
// import {  Movies  } from '../pages/Movies';
// import { NotFound } from '../pages/NotFound';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails'
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from "./Reviews/Reviews";

//const NotFound = createAsyncComponent('../pages/NotFound.jsx');


// const Home = createAsyncComponent('../pages/Home');
// const Movies = createAsyncComponent('../pages/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails/MovieDetails.jsx');
// const Cast = createAsyncComponent('../components/Cast/Cast');
// const Reviews = createAsyncComponent('../components/Reviews/Reviews');

// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails'
// import Cast from '../components/Cast/Cast';
// import Reviews from "./Reviews/Reviews";

//try with function
// const createAsyncComponent = path => {
//   const componentName = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[componentName] }))
//   );
// };

// const Home = createAsyncComponent("../pages/Home.jsx");
// const Movies = createAsyncComponent("../pages/Movies.jsx");
// const MovieDetails = createAsyncComponent("../pages/MovieDetails/MovieDetails.jsx");
// const Cast = createAsyncComponent("../components/Cast/Cast.jsx");
// const Reviews = createAsyncComponent("../components/Reviews/Reviews.jsx");