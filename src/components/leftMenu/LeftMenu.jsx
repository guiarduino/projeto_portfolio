import React from "react";
import './LeftMenu.css';
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const LeftMenu = props => {

	const projetos = useApi('project', 'get');

	return(
		<aside className="LeftMenu">
			<nav>
				<ul>
					{projetos.loading === true &&
						<span>Carregando...</span>
					}
					{projetos.loading === false && Object.values(projetos.data).length !== 0 && 
						projetos.data.map((projeto, i) => {
							if (projeto.github_link !== null) {
								return (
									<li key={projeto.id}>
										<Link to={`/projeto/${projeto.id}`}>{projeto.title}</Link>
									</li>
								)
							}
						})
					}
				</ul>
			</nav>
		</aside>
	)
}

export default LeftMenu;