import React from "react";
import PropTypes from "prop-types";
import logoprops from "../props/logoprops";
import styles from "./../styles/logocontentcomponent.module.css";

function  LogoContentComponent ({logoprops}) {
    return(
        <div className= {styles.logocontainer}>
            <img className= {styles.logoimg} src= {logoprops.stonelogo} alt= {logoprops.alts} />
        </div>
    )
}

export default LogoContentComponent;

LogoContentComponent.propTypes = {
    logoprops : PropTypes.objectOf( PropTypes.instanceOf(logoprops) )
}





