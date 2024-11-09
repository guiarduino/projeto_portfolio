import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import Home from "../../views/Home";
import NotFound from "../../views/NotFound";
import Projeto from "../../views/Projeto";
 
const Content = props => (
	<div className="PageContent">
		<Routes>
			<Route path="/" element={<Home />}>Home</Route>
			<Route path="/projeto/:id" element={<Projeto />}>Projeto</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</div>
);
 
export default Content;