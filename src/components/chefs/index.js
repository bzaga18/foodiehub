import React from "react";
import chef5 from "../../assets/photos/chef5.jpg";
import chef2 from "../../assets/photos/chef2.jpg";
import chef3 from "../../assets/photos/chef3.jpg";
import chef4 from "../../assets/photos/chef4.jpg";
import {
	ChefsContainer,
	ChefsTitle,
	ChefsWrapper,
	ChefsCard,
	Profile,
    Description,
} from "./ChefsElements";
import {FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Chefs = () => {
	return (
		<ChefsContainer>
			<ChefsTitle>Our Top Chefs</ChefsTitle>
			<ChefsWrapper>
				<ChefsCard>
					<Profile>
						<img className='profileImg' src={chef5} />
					</Profile>
					<Description>
						<p className="chefName">Charles Minor</p>
						<p>Recipes: 47</p>
						<p>Cuisine: <span style={{ fontWeight: 'bold'}}>Italian</span></p>
                        <FaFacebook className="cardIconFB" />
                        <FaInstagram className="cardIcon" />
                        <FaTwitter className="cardIconTW" />
					</Description>
				</ChefsCard>
				<ChefsCard>
					<Profile>
						<img className='profileImg' src={chef2} />
					</Profile>
					<Description>
						<p className="chefName">Hitori Hanzo</p>
						<p>Recipes: 11</p>
						<p>Cuisine: <span style={{ fontWeight: 'bold'}}>Japanese</span></p>
                        <FaFacebook className="cardIconFB" />
                        <FaInstagram className="cardIcon" />
                        <FaTwitter className="cardIconTW" />
					</Description>
				</ChefsCard>
				<ChefsCard>
					<Profile>
						<img className='profileImg' src={chef3} />
					</Profile>
					<Description>
						<p className="chefName">Javier De Jesus</p>
						<p>Recipes: 23</p>
						<p>Cuisine: <span style={{ fontWeight: 'bold'}}>Latin</span></p>
                        <FaFacebook className="cardIconFB" />
                        <FaInstagram className="cardIcon" />
                        <FaTwitter className="cardIconTW" />
					</Description>
				</ChefsCard>
				<ChefsCard>
					<Profile>
						<img className='profileImg' src={chef4} />
					</Profile>
					<Description>
						<p className="chefName">Justin Long</p>
						<p>Recipes: 10</p>
						<p>Cuisine: <span style={{ fontWeight: 'bold'}}>American</span></p>
                        <FaFacebook className="cardIconFB" />
                        <FaInstagram className="cardIcon" />
                        <FaTwitter className="cardIconTW" />
					</Description>
				</ChefsCard>
			</ChefsWrapper>
		</ChefsContainer>
	);
};

export default Chefs;
