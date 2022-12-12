import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faPlay, faXmark , faRepeat, faBackward, faForward, faVolumeHigh, faVolumeLow , faVolumeXmark ,  faVolumeOff , faJetFighter, faPause, faCircle, faCircleArrowDown, faMusic } from "@fortawesome/free-solid-svg-icons"; //Play reproductor icons


import { faList , faTrophy , faEllipsisVertical , faThumbsUp , faPlus} from "@fortawesome/free-solid-svg-icons"; //Aside icons
import { faRegistered ,faSearch} from "@fortawesome/free-solid-svg-icons"; // NavBar Icons


import { faRightToBracket , faRightFromBracket , faTriangleExclamation , faCircleCheck} from "@fortawesome/free-solid-svg-icons"; //log in form


//aside icons
const musicIcon = <FontAwesomeIcon icon = { faMusic } />
const listIcon = <FontAwesomeIcon icon= {faList}  /> ;
const trendingIcon = <FontAwesomeIcon icon= {faTrophy}/>;
const categoriesIcon = <FontAwesomeIcon icon= {faEllipsisVertical} />
const likedIcon = <FontAwesomeIcon icon= {faThumbsUp} />
const plusAddListIcon = <FontAwesomeIcon icon= {faPlus} /> ;

// Navbar icons
const registrerIcon = <FontAwesomeIcon icon = {faRegistered} />
const searchIcon = <FontAwesomeIcon icon = {faSearch} />

//Play reproductor
const playButtonIcon = <FontAwesomeIcon icon={faPlay} />
const pauseButtonIcon = <FontAwesomeIcon icon={faPause} />
const exitReproductorButtonIcon = <FontAwesomeIcon icon={faXmark} />
const circleButtonIcon = <FontAwesomeIcon icon={faCircleArrowDown} />
const repeatButtonIcon = <FontAwesomeIcon icon={faRepeat}  />
const backwardButtonIcon = <FontAwesomeIcon icon={faBackward}/>
const forwardButtonIcon = <FontAwesomeIcon icon={faForward} />

const volumeOffButtonIcon = <FontAwesomeIcon icon={faVolumeOff} />
const volumeLowButtonIcon = <FontAwesomeIcon icon={faVolumeLow} />
const volumeHighButtonIcon = <FontAwesomeIcon icon={faVolumeHigh} />
const volumeBlockedButtonIcon = <FontAwesomeIcon icon={faVolumeXmark} />
const speedMusicIcon = <FontAwesomeIcon icon={faJetFighter} />

//Form icons

const loginFormButton = <FontAwesomeIcon icon={ faRightToBracket } />
const logoutFormButton = < FontAwesomeIcon icon= {  faRightFromBracket } />
const errorAlarmIcon = <FontAwesomeIcon icon={faTriangleExclamation} />
const correctAlarmIcon = <FontAwesomeIcon icon={faCircleCheck} />


const stackicons = {
    music : musicIcon ,
    //
    list : listIcon,
    trending : trendingIcon,
    categories : categoriesIcon,
    liked: likedIcon,
    plus : plusAddListIcon,
    //
    registrer : registrerIcon,
    search : searchIcon,
    //
    play : playButtonIcon,
    pause : pauseButtonIcon,
    exit : exitReproductorButtonIcon,
    circle : circleButtonIcon,
    repeat : repeatButtonIcon,
    backward : backwardButtonIcon,
    forward : forwardButtonIcon,
    //
    volOff : volumeOffButtonIcon,
    volLow : volumeLowButtonIcon,
    volHigh : volumeHighButtonIcon,
    volBLocked : volumeBlockedButtonIcon,
    speed : speedMusicIcon,
    //
    login : loginFormButton,
    logout : logoutFormButton,
    errorAlarmIcon : errorAlarmIcon,
    correctAlarmIcon : correctAlarmIcon
}

export default stackicons;


