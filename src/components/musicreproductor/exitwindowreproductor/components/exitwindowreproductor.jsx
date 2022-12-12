import React from "react";
import styles from "./../styles/exitwindowreproductor.module.css";
import stackicons from "../../../../fontawesomeicons/iconsapp";
import { useContext } from "react";
import { ReproductorStateContext } from "../../../../hooks/exitpanelevent/exitpanelcontext";





function ExitWindowReproductor () {

    const { HidePanel  } = useContext(ReproductorStateContext);
    
    return(
        <div className= {styles.exitcontainer} >
                <button onClick={ () => HidePanel(com) }   className= {styles.exitbutton} ><i> {stackicons.exit}</i></button>
        </div>
    );
}

export default ExitWindowReproductor;
