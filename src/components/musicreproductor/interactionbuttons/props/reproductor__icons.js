import { faPlay, faXmark , faRepeat, faBackward, faForward, faVolumeHigh, faVolumeLow , faVolumeXmark ,  faVolumeOff , faJetFighter, faPause, faCircle, faMusic, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const playButtonIcon = <FontAwesomeIcon icon={faPlay} />
const pauseButtonIcon = <FontAwesomeIcon icon={faPause} />
const exitReproductorButtonIcon = <FontAwesomeIcon icon={faXmark} />
const circleButtonIcon = <FontAwesomeIcon icon={faCircle} />
const repeatButtonIcon = <FontAwesomeIcon icon={faRepeat}  />
const backwardButtonIcon = <FontAwesomeIcon icon={faBackward}/>
const forwardButtonIcon = <FontAwesomeIcon icon={faForward} />
const volumeHightIcon = <FontAwesomeIcon icon={faVolumeHigh} />
const volumeLowIcon = <FontAwesomeIcon icon={faVolumeLow} />
const volumeMutedIcon = <FontAwesomeIcon icon={faVolumeXmark} />
const volumeOffIcon = <FontAwesomeIcon icon={faVolumeOff} />
const speedIcon = <FontAwesomeIcon icon={faJetFighter} />
const musicIcon = <FontAwesomeIcon icon={faMusic} />
const listIcon = <FontAwesomeIcon icon={faBars} />
const plusIcon = <FontAwesomeIcon icon={faPlus} />




const iconsreproductor = {
    play : playButtonIcon,
    pause : pauseButtonIcon,
    exit : exitReproductorButtonIcon,
    circle : circleButtonIcon,
    repeat : repeatButtonIcon,
    backward : backwardButtonIcon,
    forward : forwardButtonIcon,
    volumeHight : volumeHightIcon,
    volumeLow : volumeLowIcon,
    volumeMuted : volumeMutedIcon,
    volumeOff : volumeOffIcon,
    speed : speedIcon,
    music : musicIcon,
    list : listIcon,
    plus : plusIcon




};

export default iconsreproductor;

