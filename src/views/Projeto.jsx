import React from "react";
import { useApi } from "../hooks/useApi";
import { useParams } from "react-router-dom";


const Projeto = props => {

    const { id } = useParams();
    const project = useApi('project/'+id, 'get');

    return (
        <div className="container">
            {project.loading === true &&
                <span>Carregando...</span>
            }
            {project.loading === false &&
                <table className="table table-bordered">
                    <tbody>
                        <tr key='titulo_projeto'>
                            <td className="fw-bolder">Titulo Projeto</td>
                            <td>{project.data.title}</td>
                        </tr>
                        <tr key='repositorio_projeto'>
                            <td className="fw-bolder">Nome Repositorio</td>
                            <td>{project.data.project_name}</td>
                        </tr>
                        <tr key='link_github'>
                            <td className="fw-bolder">Link github projeto</td>
                            <td><a href={project.data.github_link} target="_blank">{project.data.github_link}</a></td>
                        </tr>
                        <tr key='readme'>
                            <td className="fw-bolder">README.md</td>
                            <td><pre style={{widht: '100%'}}>{project.data.readme}</pre></td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Projeto;