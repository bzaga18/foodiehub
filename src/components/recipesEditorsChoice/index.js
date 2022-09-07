import React from "react";
import Image1 from "../../assets/photos/grid3.jpg";
import Image2 from "../../assets/photos/drinks.jpg";
import Image3 from "../../assets/photos/dessert.jpg";
import Image4 from "../../assets/photos/pudding.jpg";
import {
	EditorsChoiceWrap,
	EditorsChoiceTitle,
	EditorsChoiceContent,
	ImageContentOverlay,
    Content
} from "../recipesEditorsChoice/EditorsChoiceElements";

const EditorsChoice = () => {
	return (
		<EditorsChoiceWrap>
			<EditorsChoiceTitle>
				<h1>Editor's Choice</h1>
			</EditorsChoiceTitle>
			<Content>
				<EditorsChoiceContent>
					<img className='ECImg' src={Image1} />
					<ImageContentOverlay>
						<h3>Food</h3>
						<h5>20 Recipes</h5>
					</ImageContentOverlay>
				</EditorsChoiceContent>
				<EditorsChoiceContent>
					<img className='ECImg' src={Image2} />
					<ImageContentOverlay>
						<h3>Drink</h3>
						<h5>16 Recipes</h5>
					</ImageContentOverlay>
				</EditorsChoiceContent>
				<EditorsChoiceContent>
					<img className='ECImg' src={Image3} />
					<ImageContentOverlay>
						<h3>Dessert</h3>
						<h5>18 Recipes</h5>
					</ImageContentOverlay>
				</EditorsChoiceContent>
				<EditorsChoiceContent>
					<img className='ECImg' src={Image4} />
					<ImageContentOverlay>
						<h3>Pudding</h3>
						<h5>28 Recipes</h5>
					</ImageContentOverlay>
				</EditorsChoiceContent>
			</Content>
		</EditorsChoiceWrap>
	);
};

export default EditorsChoice;
