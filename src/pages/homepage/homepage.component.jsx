import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import Header from "../../components/header/header.component";

const Homepage = (props) => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    );
}

export default Homepage;