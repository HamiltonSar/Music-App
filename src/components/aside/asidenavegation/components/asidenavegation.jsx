import React from "react";
import styles from "./../styles/asidenavegation.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import asideprops from "../../asideprops/asideprops";







function AsideElements ({ asideprops }) {
    return(
        <div className= {styles.asidecontainerdiv}>
         <aside className= {styles.asidecontainersection} >
            <ul className= {styles.containerlistaside}>
                {
                    asideprops.map((data)=> (
                        <li className= {styles.itemslistsection} key = {data.id}><Link className= {styles.itemslistlinks} to = {`/${data.view}`} > {data.view} <i className= {styles.iconaside}  >{data.icon}</i> </Link></li>
                    ))
                }
            </ul>
         </aside>
        </div>
    )



}

AsideElements.propTypes = {
    asideprops: PropTypes.arrayOf( PropTypes.instanceOf(asideprops) )
}


export default AsideElements;
