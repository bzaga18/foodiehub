import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
    height: 250px;
    background-color: #262631;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
    padding-left: 190px;
    padding-top: 40px;
`;
export const LeftWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const MiddleWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
export const RightWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const ContentH1 = styled.h1`
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 16px;
`;
export const ContentP = styled.p`
    font-size: 0.9rem;
    color: #fff;
`;
