import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered ,faRightToBracket , faRightFromBracket } from "@fortawesome/free-solid-svg-icons"; // NavBar Icons


const registrerIcon = <FontAwesomeIcon icon = {faRegistered} />
const loginIcon = <FontAwesomeIcon icon = {faRightToBracket} />
const logoutIcon = < FontAwesomeIcon icon = {faRightFromBracket} />



const navbaricons = {
    register : registrerIcon,
    login : loginIcon,
    logout : logoutIcon

}

export default navbaricons;

