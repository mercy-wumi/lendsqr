import Navbar from "../components/Navbar"
import Main from "../components/Main"
import '../styles/pages/Dashboard.scss'
import Sidebar from "../components/Sidebar"


const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className='main-container'>
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}

export default Dashboard