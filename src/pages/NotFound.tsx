import { faAngleDoubleLeft, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <div className="mb-4">
                    <h3 className="font-black text-5xl text-blue-600">Error 404</h3>
                    <p className="font-light text-xl">Page not found</p>
                </div>
                <Link to="/" className="text-blue-500 hover:underline">
                    <FontAwesomeIcon icon={faAngleLeft} className="mr-1" />
                    Return to challenges
                </Link>
            </div>            
        </div>
    );
}