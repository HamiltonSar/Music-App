import React from "react";
import styles from "./../styles/musicreproductorcore.module.css";
import MusicIcon from "../../miniatureposter/components/miniatureposter";
import ExitWindowReproductor from "../../exitwindowreproductor/components/exitwindowreproductor";
import MusicName from "../../musicname/components/musicname";
import LineTime from "../../linetime/components/linetime";
import ManageSound from "../../managesound/component/managesound";
import ExitPanelContext from "../../../../hooks/exitpanelevent/exitpanelcontext";





function MusicReproductorCore (){
    return(

         <div className= {styles.musicreproductorcore} >

               <div className= {styles.exitreproductorcontainer} >
                  <ExitPanelContext>
                     <ExitWindowReproductor />
                  </ExitPanelContext>
               </div>

            <div className= {styles.reproductorpanelcontainer} >

                  <div className= {styles.musicpostercontainer} >
                     <MusicIcon />
                  </div>

                  <div className= {styles.buttonsmanagercontainer} >
                     <div className= {styles.descriptmusiccontainer} >
                        <MusicName /> 
                     </div>

                     <div className= {styles.linetimecontainer} >
                        <LineTime />
                     </div>

                     <div className= {styles.managerpanelcontainer} >
                        <ManageSound />
                     </div>
                     
                  </div>
            </div>
         </div>
      
        
    );
}

export default MusicReproductorCore;
