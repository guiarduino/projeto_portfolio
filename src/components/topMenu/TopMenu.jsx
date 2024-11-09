import React from "react";
import './TopMenu.css';
import Image from "../Image";
import { Link } from "react-router-dom";

const TopMenu = props => {
    return (
        <div className="TopMenu">
            <div className="container-fluid">
                <div className="content row">
                    <div className="col">
                        <div className="title_page">
                            <Image className="image_title" src="/img/foto_gui.jpg" height={60} width={60} borderRadius={0}/>
                            <span>{process.env.REACT_APP_NAME_USER}</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="menu_top">
                            <ul>
                                <li>
                                    <a href={process.env.REACT_APP_RESUME_FILE} target="_blank"><i className="bi bi-files"></i> Curriculum Vitae</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to={`/`}><i className="bi bi-folder-fill"></i> Projetos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;