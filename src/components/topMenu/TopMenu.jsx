import React from "react";
import './TopMenu.css';
import Image from "../Image";

const TopMenu = props => {
    return (
        <div className="TopMenu">
            <div className="container-fluid">
                <div className="content row">
                    <div className="col">
                        <div className="title_page">
                            <Image className="image_title" src="/img/foto_gui.jpg" height={60} width={60} borderRadius={0}/>
                            <span>Guilherme Arduino Barlatti</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="menu_top">
                            <ul>
                                <li>
                                    <a href="/curriculum"><i className="bi bi-files"></i> Curriculum Vitae</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="/"><i className="bi bi-folder-fill"></i> Projetos</a>
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