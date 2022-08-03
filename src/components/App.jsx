import { Routes, Route  } from "react-router-dom";
import { Home } from '../pages/Home';
import {  Movies  } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import {Container, Header, Link } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Header>
        <Link  to="/">Home</Link >
        <Link  to="/movies">Movies</Link >
      </Header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Container>
  );
};
