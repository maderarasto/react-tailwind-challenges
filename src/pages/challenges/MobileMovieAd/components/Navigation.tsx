import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
    return (
        <nav className="h-16 px-1 shadow shadow-sky-100">
            <div className="flex items-center justify-between h-full text-slate-900">
                <button type="button" title="Back" className="w-12 h-12 rounded-xl hover:bg-blue-100">
                    <FontAwesomeIcon icon={faAngleLeft} size="xl" />
                </button>
                <h2 className="font-medium text-2xl">In Theatres</h2>
                <button type="button" title="Menu" className="w-12 h-12 rounded-xl hover:bg-blue-100">
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </button>
            </div>
        </nav>
    )
}