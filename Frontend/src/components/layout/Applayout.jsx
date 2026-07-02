import Navbar from "./Navbar"
import MainLayout from "./MainLayout"
import ChatInput from "../Input/ChatInput"

function AppLayout() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <MainLayout />
            <ChatInput />
        </div>
    )
}

export default AppLayout