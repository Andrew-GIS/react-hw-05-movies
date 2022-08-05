import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FilmList = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const FilmItem = styled(NavLink)`
	display: block;
	text-decoration: none;
	:hover{
		color: orange;
		textext-decoration: underline;
	}
`;