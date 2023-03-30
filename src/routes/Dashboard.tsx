import Navbar from "../components/Navbar"
import '../styles/pages/Dashboard.scss'
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className='main-container'>
                <Sidebar />
                <>
                    <Outlet />
                </>
            </div>
        </div>
    )
}

export default Dashboard