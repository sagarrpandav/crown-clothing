import React, {useEffect} from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import Header from "../../components/header/header.component";

const Homepage = (props) => {
    /*useEffect(() => {
        document.getElementsByTagName("a")[0].click()
    },[]);*/

    return (
        <div className='homepage'>
            <Directory/>
        </div>
    );
}

export default Homepage;