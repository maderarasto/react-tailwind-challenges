import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex items-center justify-center min-h-screen mx-auto bg-gray-100">
            <div className="w-full max-w-6xl h-[768px] rounded-lg shadow-md bg-gray-50">
                <Outlet />
            </div>
        </div>
    )
}