import MusicItemContainer from "../../musiccontainer/components/musiccontainer";
import TitleCategory from "../../categoriesmusiclist/components/categoriesmusiclist";
import React from "react";
import styles from "./../styles/musicpanelcore.module.css";





function MusicPanelCore () {
    return(
        <div className= {styles.musicpanelcore} >
            <TitleCategory titlecategory= "Popular"/>
            <MusicItemContainer />
            <TitleCategory titlecategory= "Trendings" /> 
            <TitleCategory titlecategory= "Relaxing" /> 
            <TitleCategory titlecategory= "Pop" /> 
            <TitleCategory titlecategory= "Rock" />        
        </div>

    );

}

export default MusicPanelCore;

