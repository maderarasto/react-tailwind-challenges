import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent } from "react";

interface SearchInputProps extends React.HTMLAttributes<HTMLElement> {
    disabled?: boolean,
    onInput?: (ev: SyntheticEvent<HTMLInputElement>) => void
}

export default function SearchInput({
    onInput,
    ...props
}: SearchInputProps) {
    function handleInputEvent(ev: SyntheticEvent<HTMLInputElement>) {
        if (onInput) {
            onInput(ev);
        }
    }

    return (
        <div 
            {...props} 
            className={`flex items-center rounded-full border-2 text-gray-400 bg-white overflow-hidden focus-within:border-gray-500 focus-within:text-gray-500 ${props.className} ${props.disabled ? 'opacity-50 pointer-events-none' : ''}`}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="px-4" />
            <input type="text" name="" id="" className="grow pr-4 py-1 outline-none" placeholder="Search" onInput={handleInputEvent} />
        </div>
    );
}