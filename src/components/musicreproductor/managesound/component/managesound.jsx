import React from "react";
import AddFavoriteSong from "../../interactionbuttons/components/addfavorites/addfavoritesong";
import Backward from "../../interactionbuttons/components/backward/backward";
import Repeat from "../../interactionbuttons/components/repeat/repeat";
import Forward from "../../interactionbuttons/components/forward/forward";
import Speed from "../../interactionbuttons/components/speed/speed";
import Volume from "../../interactionbuttons/components/volume/volume";
import Lisitem from "../../interactionbuttons/components/listitem/listitem";
import Play from "../../interactionbuttons/components/play/play";
import styles from "./../styles/managesound.module.css";




function ManageSound () {
    return (
        <div className= {styles.managesoundcontainer} >
            <div className= {styles.buttonseparations} >
                <Speed />
                <Repeat />
                <Volume />
            </div>
            <div className= {styles.buttonseparations} >
                <Backward />
                <Play />
                <Forward />
            </div>
            <div className= {styles.buttonseparations} >
                <AddFavoriteSong />
                <Lisitem />
            </div>
        </div>
    )
}


export default ManageSound;