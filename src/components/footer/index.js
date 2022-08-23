import React from "react";
import { FooterContainer, LeftWrap, RightWrap, MiddleWrap, ContentH1, ContentP } from "./FooterElements";
import {FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import {AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
	return (
		<FooterContainer>
			<LeftWrap>
                <ContentH1>FoodieHub.com</ContentH1>
                <ContentP>
                    <p>FoodieHub is a place where you can please your soul and tummy with delicious food recipies of all cuisine. Our services are absolutely free.</p>
                    <p className="copyright">© 2022 | All Rights Reserved</p>
                </ContentP>
            </LeftWrap>
			<MiddleWrap>
                <ContentH1>Contact Us</ContentH1>
                <ContentP className="footerContent">
                    <p>foodiehub@gmail.com</p>
                    <p>877-541-1111</p>
                    <p>2393 Division St San Diego, CA 92114</p>
                </ContentP>
            </MiddleWrap>
			<RightWrap>
                <ContentH1>Socials</ContentH1>
                <ContentP className="iconsWrap">
                    <FaTwitter className="footerIcons" />
                    <FaInstagram className="footerIcons" />
                    <FaFacebook className="footerIcons" />
                    <AiOutlineYoutube className="footerIcons" />
                </ContentP>
            </RightWrap>
		</FooterContainer>
	);
};

export default Footer;
