import React from "react";
import styles from "./../styles/linetime.module.css";




function LineTime () {
    return(
        <div className= {styles.linetimecontainer}>

           <div className= {styles.timerstartcont}>
              <h3 className= {styles.timestart} >1:30</h3>
           </div>

           <div className= {styles.lineprogresscont} >
               <progress className= {styles.lineprogress} ></progress>
           </div>

           <div className= {styles.timerendcont}>
              <h3 className= {styles.timesend} >2:30</h3>
           </div>

        </div>
        
    )
}

export default LineTime;
