import React from "react";
import Image1 from '../../assets/photos/grid7.jpg'
import {
	RecipesContainer,
	RecipeCard,
} from "./RecipesInfoElements";

const RecipesInfo = ({ title, subtitle, buttonLabel, img }) => {
	return (
		<RecipesContainer>
			<RecipeCard>
				<img src={img} className='cardImg' />
				<h1>{title}</h1>
				<p className='cardSubtitle'>{subtitle}</p>
				<button className='cardBtn'>{buttonLabel}</button>
			</RecipeCard>
			
		</RecipesContainer>
	);
};

export default RecipesInfo;
