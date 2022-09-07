import React from "react";
import RecipesHero from '../../assets/photos/recipeshero.jpg';
import {
	Container,
	HeroBg,
	HeroContent,
	Heroh1,
	HeroBtnWrap,
	RecipesWrap,
	RecipeCard
} from "./RecipesElements";


const Recipes = () => {
	return (
		// <h1>Hello</h1>
		<Container>
			<HeroBg>
				<img className='recipesHero' src={RecipesHero} alt='food' />
			</HeroBg>
			<HeroContent>
				<Heroh1>Best Review Recipes 2022</Heroh1>
				<HeroBtnWrap>Read More</HeroBtnWrap>
			</HeroContent>
		</Container>
	);
};

export default Recipes;
