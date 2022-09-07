// import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
	// const [scrollNav, setScrollNav] = useState(false);

	// const changeNav = () => {
	// 	if (window.scrollY >= 80) {
	// 		setScrollNav(true);
	// 	} else {
	// 		setScrollNav(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", changeNav);
	// }, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to='/' onClick={toggleHome}>
					Foodie<span style={{ color: "#e03852" }}>Hub</span>
				</NavLogo>
				<MobileIcon>
					<FaBars onClick={toggle} />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLink onClick={toggleHome}>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink as={Link} to={'/recipes'}>Recipes</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Contact</NavLink>
					</NavItem>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
