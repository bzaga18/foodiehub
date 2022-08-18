import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
	background-color: #fff;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
`;

export const NavbarContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	padding: 0 24px;
	max-width: 1100px;
	justify-content: space-between;
	z-index: 1;
`;

export const NavLogo = styled(LinkR)`
	text-decoration: none;
	color: #000;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-self: flex-start;
	margin-left: 24px;
	font-weight: bold;
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #6ae342;
	}
`;
export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	width: 50%;
	justify-content: space-evenly;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.div`
	height: 80px;
`;
export const NavLink = styled(LinkS)`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	opacity: 0.75;

	&.active {
		background-color: #6ae342;
		border-radius: 25px;
	}

	&:hover {
		color: #6ae342;
		transition: all 0.3s ease;
		opacity: 1;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	white-space: nowrap;
	text-decoration: none;
	color: #6ae342;
	border: 2px solid;
	padding: 10px 20px;
	border-radius: 50px;
	border-color: #6ae342;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	outline: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: lightgrey;
		color: green;
	}
`;
