import React from "react";
import styles from "./../styles/musiccontainer.module.css";
import MusicItem from "../../musicitem/components/musicsitem";
import artistobjectreproductor from "../../../../assets/musics/artistobjectreproductor/artistobjects";


function MusicItemContainer () {
    return(
        <div className= {styles.musicitemcontainer} >
            {
                artistobjectreproductor.map((src)=> (
                    <MusicItem key = {src.id} artistposters = {src.artistposter} artistnames = {src.artistname} musicnames = {src.musicname} />
                ))
            } 
        </div>
    );
}

export default MusicItemContainer;
