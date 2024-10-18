import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import Home from "../../views/Home";
import Teste from "../../views/Teste";
import NotFound from "../../views/NotFound";
 
const Content = props => (
	<div className="PageContent">
		<Routes>
			<Route path="/" element={<Home />}>Home</Route>
			<Route path="/teste" element={<Teste />}>Teste</Route>
			{/* <Route path="/about" element={<About />} />
			<Route path="/param/:id" element={<Param />} />
			<Route path="/" exact element={<Home />} /> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	</div>
);
 
export default Content;