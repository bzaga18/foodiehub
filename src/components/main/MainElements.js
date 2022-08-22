import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 60px 80px;
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
	max-width: 700px;

	@media screen and (max-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const RightWrap = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
	grid-gap: 5px;
	/* max-width: 700px; */
	/* min-width: 460px; */
	margin-left: auto;
	margin-right: auto;
	justify-content: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 50%);
		align-items: center;
		max-width: 300px;
	}
`;

export const MainH1 = styled.h1`
	font-size: 3rem;
	margin-bottom: 20px;
	font-family: 'Crimson Text', serif;

	@media screen and (max-width: 768px) {
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

