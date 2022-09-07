import React from 'react'

import {RecipesContainer, RecipeCard} from './RecipesInfoElements'

const RecipesInfo = ({title, subtitle, buttonLabel, img}) => {
    return (
        <RecipesContainer>
            <RecipeCard>
                <img src={img} className='cardImg' />
                <h1>{title}</h1>
                <p className='cardSubtitle'>{subtitle}</p>
                <button className='cardBtn'>{buttonLabel}</button>
            </RecipeCard>
            <EditorsChoiceWrap>
                <EditorsChoiceTitle>
                    <h1>Editor's Choice</h1>
                </EditorsChoiceTitle>
            </EditorsChoiceWrap>
        </RecipesContainer>
    )
}

export default RecipesInfo