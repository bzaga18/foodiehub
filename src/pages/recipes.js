import React from "react";
import Recipes from "../components/recipesHero";
import RecipesInfo from "../components/recipesInfo";
import { CardData, CardDataTwo, CardDataThree } from "../components/recipesInfo/CardData";
import { RecipesWrap } from "../components/recipesInfo/RecipesInfoElements";
import styled from "styled-components";
import EditorsChoice from "../components/recipesEditorsChoice";
import SpecialFeatures from "../components/specialFeatures";


const RecipesPage = () => {
	return (
		<>
			<Recipes />
            <div className="recipesWrap">
                <RecipesInfo {...CardData} />
                <RecipesInfo {...CardDataTwo} />
                <RecipesInfo {...CardDataThree} />
            </div>
            <EditorsChoice />
            <SpecialFeatures />
		</>
	);
};

export default RecipesPage;
