import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Main2Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 0 80px 50px;
	margin-right: auto;
	margin-left: auto;
	max-width: 1400px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 30px 20px;
		text-align: center;
	}
`;
export const LeftWrap = styled.div`
	width: 100%;
	height: 100%;
	margin-right: auto;
	margin-left: auto;
`;

export const RightWrap = styled.div`
	width: 100%;
	height: 100%;
	margin-right: auto;
	margin-left: auto;
    padding: 0px 20px;
`;

export const MainH1 = styled.h1`
	font-size: 3rem;
	margin-bottom: 20px;
	font-family: 'Crimson Text', serif;

	@media screen and (max-width: 768px) {
		font-family: 'Crimson Text', serif;
		font-size: 2rem;
	}
`;
export const MainP = styled.p`
	color: #808080;
`;
export const MainBtnWrap = styled.div`
	margin-top: 40px;
	list-style: none;
	padding-left: 20px;
`;
export const MainBtnRoute = styled(LinkR)`
	list-style: none;
	text-decoration: none;
	color: #fff;
	background-color: #e03852;
	padding: 10px 24px;
	cursor: pointer;
	border-radius: 12px;
	text-transform: uppercase;
	box-shadow: 0 3px 6px grey;
	letter-spacing: 1px;
	font-size: 0.8rem
`;

