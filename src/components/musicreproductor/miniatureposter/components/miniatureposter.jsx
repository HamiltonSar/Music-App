import React from "react";
import styles from "./../styles/miniatureposter.module.css";
import example from "./../../../../assets/musics/artistposters/artistpostercollections/alanwalker.webp";




function MusicIcon (){
    
    return(
            <div className= {styles.postercontainer} >
                <img className= {styles.poster} src= {example} alt="" />
            </div>
    );
}
 export default MusicIcon;
 