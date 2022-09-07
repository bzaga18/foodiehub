import React from "react";
import "./App.css";
import Home from "./pages";
import Signin from "./pages/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route path='/signin' element={<Signin />} exact />
				<Route path='/recipes' element={<Recipes />} exact />
			</Routes>
		</Router>
	);
}

export default App;
