import React from "react";
import AsideElements from "../../asidenavegation/components/asidenavegation";
import asideprops from "../../asideprops/asideprops";
import styles from "./../styles/asidecore.module.css";




function AsideCore () {
    return(
        <div className= {styles.asidecore} >
            <AsideElements asideprops={asideprops}/>
        </div>
    );
}

export default AsideCore;



