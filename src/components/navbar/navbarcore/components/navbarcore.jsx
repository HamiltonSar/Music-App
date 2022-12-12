import React from "react";
import LogoContentComponent from "../../logocomponent/components/logocontentcomponent";
import NavBarComponent from "../../navbarcomponent/components/navbarcomponent";
import SearchField from "../../searchfield/components/searchfield";
import WebTitle from "../../webtitle/components/webtitle";
import styles from "./../styles/navbarcore.module.css";


import webtitleprops from "../../webtitle/props/webtitleprops";
import navbarprops from "../../navbarcomponent/props/navbarprops";
import searchprops from "../../searchfield/props/searchprops";
import logoprops from "../../logocomponent/props/logoprops";


function NavBarCore () {
    return(
        <div className= {styles.navbarcore} >
            <LogoContentComponent logoprops={logoprops} />
            <WebTitle webtitleprops={webtitleprops}/>
            <NavBarComponent navbarprops={navbarprops}/>
            <SearchField  searchprops={searchprops}/>
        </div>
    )
} 

export default NavBarCore;
