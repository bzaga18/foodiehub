import React from "react";
import Video from "../../videos/video.mp4";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
    HeroBtnWrapper,
    Button
} from "./HeroElements";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Family</HeroH1>
				<HeroH1>Favorite</HeroH1>
				<HeroH1>Recipes</HeroH1>
                <HeroP>Family favorite meals that everyone will love.</HeroP>
                <HeroBtnWrapper>
                    <Button>Click for recipes</Button>
                </HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
