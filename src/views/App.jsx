import React from "react";
import { BrowserRouter } from  'react-router-dom';
import TopMenu from "../components/topMenu/TopMenu";
import LeftMenu from "../components/leftMenu/LeftMenu";
import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <TopMenu />
                <LeftMenu />
                <Content />
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;