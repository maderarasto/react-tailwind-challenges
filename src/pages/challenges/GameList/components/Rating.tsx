import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RatingProps = {
    total: number
    value: number
}

export default function Rating({
    total,
    value
}: RatingProps) {
    const emptyStars = total - value;

    return (
        <div className="flex items-center">
            {[...Array(value).keys()].map((_, index) => <FontAwesomeIcon key={index} icon={faStarSolid} size="sm" className="text-indigo-400" />)}
            {[...Array(emptyStars).keys()].map((_, index) => <FontAwesomeIcon key={index} icon={faStarRegular} size="sm" className="text-indigo-400" />)}
        </div>
    )
}