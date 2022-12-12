import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList , faTrophy , faEllipsisVertical , faThumbsUp , faPlus} from "@fortawesome/free-solid-svg-icons";


const listIcon = <FontAwesomeIcon icon= {faList}  /> ;
const trendingIcon = <FontAwesomeIcon icon= {faTrophy}/>;
const categoriesIcon = <FontAwesomeIcon icon= {faEllipsisVertical} />
const likedIcon = <FontAwesomeIcon icon= {faThumbsUp} />
const plusAddListIcon = <FontAwesomeIcon icon= {faPlus} /> ;

const asideicon = {
    list : listIcon,
    trending : trendingIcon,
    categories : categoriesIcon,
    liked : likedIcon,
    plus : plusAddListIcon
}

export default asideicon;
