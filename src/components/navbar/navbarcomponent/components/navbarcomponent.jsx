import React from "react";
import Proptypes from "prop-types";
import styles from "./../styles/navbarcomponent.module.css";
import { Link } from "react-router-dom";
import navbaricons from "../props/iconnavbar";
import navbarprops from "../props/navbarprops";





function NavBarComponent ({ navbarprops }) {


    return(
        <div className= {styles.navbaritemscontainer}>
            <nav className= {styles.navcontent}>
                <ul className= {styles.ulnavcontent}>
                    <li className= {styles.navlist}> <Link className= {styles.navlinks} to = {`/createaccount`}>  {navbarprops.setting}</Link> </li>
                    <li className= {styles.navlist}> <Link className= {styles.navlinks} to = {`/login`}> {navbarprops.logout} <i className= {styles.navbariconlogin} >{navbaricons.login}</i></Link></li>
                </ul>
            </nav>

        </div>
    );

}

export default NavBarComponent;


NavBarComponent.propTypes = {
    navbarprops: Proptypes.objectOf( Proptypes.instanceOf(navbarprops) )
}
