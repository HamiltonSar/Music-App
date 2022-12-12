import React from "react";
import Proptypes from "prop-types";
import styles from "./../styles/searchfield.module.css";
import searchprops from "../props/searchprops";





function SearchField ({searchprops})  {
    return(
        <div className= {styles.inputsearchcontainer} >
            <input className= {styles.inputsearch}  type= {searchprops.type}  placeholder = {searchprops.placeholder}  />
        </div>
    )
}

export default SearchField;



SearchField.propTypes = {
    searchprop: Proptypes.objectOf( Proptypes.instanceOf(searchprops) )
}
