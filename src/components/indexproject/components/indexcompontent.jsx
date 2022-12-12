import React from "react";
import styles from "./../styles/indexcomponent.module.css";
import AsideCore from "../../aside/asidecore/components/asidecore";
import MusicPanelCore from "../../musicpanel/musicpanelcore/components/musicpanelcore";
import MusicReproductorCore from "../../musicreproductor/musicreproductorcore/components/musicreproductorcore";
import NavBarCore from "../../navbar/navbarcore/components/navbarcore";




function AppWindow() {
    return(
        <div className= {styles.appwindowcontainer} > 

            <div className= {styles.navbarcontainer} >
               <NavBarCore />
            </div>

            <div className= {styles.mainpanelcontainer} >
               <AsideCore />
               <MusicPanelCore />
            </div>

            
            <div className= {styles.panelmusicmanager} >
                    <MusicReproductorCore/>
            </div>
        </div>
    )
    
}

export default AppWindow;
