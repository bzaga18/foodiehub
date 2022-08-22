import styled from "styled-components";

export const HeroContainer = styled.div`
	background-color: #0c0c0c;
	display: flex;
	align-items: center;
	padding: 0;
	height: 600px;
	position: relative;
	z-index: 1;

	// dark overlay for video
	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.2) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

//video player container
export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
	-o-object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	background: linear-gradient(
		to right,
		rgba(0, 0, 0, 1) 40%,
		rgba(0, 0, 0, 0.7) 70%,
		rgba(0, 0, 0, 0.4) 90%,
		rgba(0, 0, 0, 0) 100%
	);
	width: 50%;

    @media screen and (max-width: 768px) {
        background: none;
        align-items: center;
        width: 100%;
    }
`;

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 4rem;
	font-family: 'Crimson Text', serif;
	line-height: 60px;
`;

export const HeroP = styled.p`
	color: #fff;
    padding: 20px 0;
    font-size: 1.2rem;
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    background-color: #e03852;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;

	&:hover {
		background-color: #b91d34;
		transition: all 0.3s ease-in-out;
	}
`;
