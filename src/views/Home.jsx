import React from "react";
import { useApi } from "../hooks/useApi";
import { Link } from "react-router-dom";

const Home = props => {

	const projetos = useApi('project', 'get');

	return (
		<div className="container">
			<div className="col">
				<h1 className="text-center mb-4">Projetos</h1>
				<table className="table table-bordered">
					<thead>
						<tr>
							{process.env.REACT_APP_ENV === 'local' &&
								<th scope="row">id</th>
							}
							<th scope="row">Titulo</th>
							<th scope="row">Links</th>
							{process.env.REACT_APP_ENV === 'local' &&
								<th scope="row">Local</th>
							}
						</tr>
					</thead>
					<tbody>
						{projetos.loading === true && 
							<tr key='carregando'>
								<td colSpan='100%' className="center">Carregando...</td>
							</tr>
						}
						{projetos.loading === false && Object.values(projetos.data).length === 0 && 
							<tr key='vazio'>
								<td colSpan='100%' className="center">Nenhum projeto encontrado</td>
							</tr>
						}
						{projetos.loading === false && Object.values(projetos.data).length !== 0 && 
							projetos.data.map((projeto, i) => {
								return (
									<tr key={i}>
										{process.env.REACT_APP_ENV === 'local' &&
											<td scope="row">{projeto.id}</td>
										}
										<td>{projeto.title}</td>
										<td>
											{projeto.github_link !== null &&
												<a className="link" title="guithub" href={projeto.github_link} target="_blank"><i className="bi bi-github"></i></a>
											}
											{projeto.github_link !== null &&
												<Link className="link" to={`/projeto/${projeto.id}`}><i className="bi bi-files"></i></Link>
											}
										</td>
										{process.env.REACT_APP_ENV === 'local' &&
											<td></td>
										}
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home;