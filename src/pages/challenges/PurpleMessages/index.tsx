import Sidebar from "./components/Sidebar"

export default function PurpleMessages() {
    return (
        <div className="flex h-[100dvh] h-[100vh] overflow-hidden">
            <Sidebar />
            <div className="grow bg-purple-50 overflow-auto">
            </div>
        </div>
    );
}