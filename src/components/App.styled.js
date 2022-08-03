import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
margin: 0 auto;
padding: 0 20px;`;

export const Header = styled.header`
display: flex;
align-items: center;
padding: 10px;
> nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
	padding: 8px 16px;
  	border-radius: 4px;
  	text-decoration: none;
  	color: black;
  	font-weight: 500;

	&:active, :focus, :hover{
		color: white;
		background-color: orangered;
	}
`;