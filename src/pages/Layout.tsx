import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex items-center justify-center min-h-screen mx-auto bg-slate-300">
            <div className="w-full max-w-6xl h-[768px] rounded-lg shadow-md bg-white">
                <Outlet />
            </div>
        </div>
    )
}