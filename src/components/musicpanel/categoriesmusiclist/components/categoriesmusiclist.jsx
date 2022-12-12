import React from "react";
import PropTypes from "prop-types";
import styles from "./../styles/categoriesmusiclist.module.css";
import categoriesicon from "../props/categories__icons";



function  TitleCategory ({titlecategory}) {
    return(
        <div className= {styles.categorycontainer} >
            <h2 className= {styles.categorytitle}>{titlecategory} <i className= {styles.categoriestitleicons} > {categoriesicon.music}</i></h2>
        </div>
    )

}

export default TitleCategory;


TitleCategory.propTypes = {
    titlecategory: PropTypes.string

}