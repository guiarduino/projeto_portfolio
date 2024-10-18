import React from "react";
import './LeftMenu.css';
import { Link } from "react-router-dom";

const LeftMenu = props => {
	return(
		<aside className="LeftMenu">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/teste">Teste</Link>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default LeftMenu;