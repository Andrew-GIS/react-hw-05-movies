import React, { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Header, Link } from '../App.styled';

export const SharedLayout = () => {
  return (
    <>
      	<Header>
        	<Link to="/">Home</Link >
			  <Link to="/movies">Movies</Link >
		</Header>
		<Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};