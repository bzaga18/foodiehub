import React from "react";
import { FaChartLine } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import {
	SpecialFeaturesContainer,
	SpecialFeaturesTitle,
	CardWrapper,
	Card1,
	BGImg,
  Content
} from "./SpecialFeaturesElements";
import BGimg from "../../assets/photos/grid8.jpg";

const SpecialFeatures = () => {
	return (
		<SpecialFeaturesContainer>
			<BGImg>
				<img className='specialFeaturesBG' src={BGimg} />
			</BGImg>
			<Content>
				<SpecialFeaturesTitle>
					<h1>Special Features</h1>
				</SpecialFeaturesTitle>
				<CardWrapper>
					<Card1>
						<FaChartLine className='specialFeaturesIcon' />
						<h2 className='specialFeaturesH2'>Food Nutritions</h2>
						<p>
							Humblebrag gluten-free mixtape butcher green juice
							dreamcatcher retro live-edge blog tumblr gentrify.
						</p>
					</Card1>
					<Card1>
						<AiOutlineClockCircle className='specialFeaturesIcon' />
						<h2 className='specialFeaturesH2'>Cooking Period</h2>
						<p>
							Fit tacos lyft thundercats four loko sustainable
							marfa live-edge chillwave 8-bit 90's ethical you
							probably haven't heard of them pabst. Edison bulb
							semiotics enamel pin, activated charcoal sustainable
							PBR&B prism subway tile tacos whatever fanny pack
							cold-pressed pitchfork.
						</p>
					</Card1>
					<Card1>
						<BsFillPeopleFill className='specialFeaturesIcon' />
						<h2 className='specialFeaturesH2'>Membership</h2>
						<p>
							Shaman gochujang man bun, fixie godard keytar deep v
							tacos pour-over four dollar toast street art selvage
							VHS tumblr.
						</p>
					</Card1>
				</CardWrapper>
			</Content>
		</SpecialFeaturesContainer>
	);
};

export default SpecialFeatures;
