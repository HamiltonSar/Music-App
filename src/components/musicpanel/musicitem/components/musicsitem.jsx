import React  from "react";
import styles from "./../styles/musicitem.module.css";
import itemiconmusic from "../props/itemmusicicon";







function MusicItem  ( itemsprops ) {


    return(
        <div className= {styles.musicitemcontainer} >

            <div className= {styles.itemimgcontainer} >
                <img className= {styles.itemimg}  src= {itemsprops.artistposters}/>
            </div>
            
            <div className= {styles.descriptdatacontainer} >
                <div className= {styles.itemtitlecontainer} >
                    <h2 className= {styles.itemtitle} > {itemsprops.artistnames}</h2>
                    <h2 className= {styles.itemtitle} > {itemsprops.musicnames} </h2>
                </div>

                <div className= {styles.itembuttoncontainer}>
                    <button className= {styles.itembuttonplay} >Play <i className= {styles.itembuttonplayicon}>{itemiconmusic.play}</i></button>
                </div>
            </div>

            
            
        </div>

    );

}

export default MusicItem;

