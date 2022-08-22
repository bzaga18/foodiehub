import React from "react";
import {
	SidebarContainer,
	Icon,
	ClosedIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
	NavLogo,
	SocialIconWrapper,
} from "./SidebarElements";
import { animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import {
	AiOutlineContacts,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineYoutube,
} from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { GiChefToque } from "react-icons/gi";
import { TiSocialLinkedin } from "react-icons/ti";

const Sidebar = ({ isOpen, toggle }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<ClosedIcon />
			</Icon>
			<NavLogo to='/' onClick={toggleHome}>
				Foodie<span style={{ color: "#e03852" }}>Hub</span>
			</NavLogo>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink>
						<FaHome className='sideIcon' />
						Home
					</SidebarLink>
					<SidebarLink>
						<BiFoodMenu className='sideIcon' />
						Recipes
					</SidebarLink>
					<SidebarLink>
						<RiSlideshow3Line className='sideIcon' />
						Shows
					</SidebarLink>
					<SidebarLink>
						<GiChefToque className='sideIcon' />
						Chefs
					</SidebarLink>
					<SidebarLink>
						<BsInfoCircle className='sideIcon' />
						About
					</SidebarLink>
					<SidebarLink>
						<AiOutlineContacts className='sideIcon' />
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/signin'>Sign In</SidebarRoute>
				</SideBtnWrap>
				<SocialIconWrapper>
					<AiOutlineInstagram />
					<AiOutlineTwitter />
					<AiOutlineYoutube />
                    <TiSocialLinkedin />
				</SocialIconWrapper>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
