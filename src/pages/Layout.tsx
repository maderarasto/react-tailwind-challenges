import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex items-center justify-center min-h-screen mx-auto bg-gray-100">
            <Outlet />
        </div>
    )
}