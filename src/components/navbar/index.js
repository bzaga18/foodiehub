import React from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/" onClick={toggleHome}>
					Foodie<span style={{ color: "#6ae342" }}>Hub</span>
				</NavLogo>
				<MobileIcon>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLink>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Recipes</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Contact</NavLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/'>Sign In</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
