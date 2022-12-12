import React from "react";
import Proptypes from "prop-types";
import styles from "./../styles/webtitle.module.css";
import webtitleprops from "../props/webtitleprops";






function WebTitle ({webtitleprops}) {
    return(
        <div className= {styles.webtitlecontainer} >
            <h2 className= {styles.webtitle} >{webtitleprops.title} </h2>
        </div>
    )

}


export default WebTitle;

WebTitle.propTypes = {
    webtitle: Proptypes.objectOf( Proptypes.instanceOf(webtitleprops) )
}

