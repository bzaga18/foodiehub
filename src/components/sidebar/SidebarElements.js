import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";


export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #262631;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	padding: 84px 0;
`;

export const NavLogo = styled(LinkR)`
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	font-size: 3rem;
	display: flex;
	align-items: center;
	justify-self: center;
	font-weight: bold;
	margin-bottom: 40px;
	margin-left: auto;
	margin-right: auto;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const ClosedIcon = styled(FaTimes)`
	color: #fff;
`;

export const SidebarWrapper = styled.div`
	color: #0d0d0d;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 42px;
`;

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 45px);
	}
`;

export const SidebarLink = styled(LinkS)`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	font-size: 1.2rem;
	list-style: none;
	transition: all 0.3s ease-in-out;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	padding: 0 24px;
	border-radius: 18px;

	&:hover {
		background-color: #181820;
		transition: all 0.3s ease-in-out;
		border-radius: 18px;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 160px;
`;

export const SidebarRoute = styled(LinkR)`
	list-style: none;
	text-decoration: none;
	background-color: #e03852;
	padding: 12px 64px;
	border-radius: 24px;
	color: #fff;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: #1a512f;
		transition: all 0.3s ease-in-out;
	}
`;

export const SocialIconWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	font-size: 1.8rem;
	display: flex;
	justify-content: space-evenly;
	width: 50%;
	color: #e03852;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;
