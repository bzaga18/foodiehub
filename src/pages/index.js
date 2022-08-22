import React, { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import Main2 from "../components/main2";
import Quote from "../components/quote";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar toggle={toggle} />
			<Hero />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Main />
			<Main2 />
			<Quote />
		</>
	);
};

export default Home;
