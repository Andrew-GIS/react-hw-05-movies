import React, { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Header, Link } from '../App.styled';
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import styles from '../../pages/MovieDetails/MovieDetails';

export const SharedLayout = () => {
  return (
    <>
      	<Header>
        	<Link to="/">Home</Link >
			  <Link to="/movies">Movies</Link >
			  {/* <button type='button'><AiOutlineArrowLeft/></button> */}
		</Header>
		<Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};