import { useState, useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom"
import '../styles/components/UserDetails.scss'
import backArrow from '../images/backArrow.png'
import MoreOptions from '../components/MoreOptions'
import profile from '../images/profile.png'
import star from '../images/star.png'
import GeneralDetails from '../components/TabComponents/GeneralDetails'
import { UserContext } from '../context/UserContext'

// export const loader = async () => {
//     const resp = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
//     const users = await resp.json()
//     return users
// }

const tabs = [
    {
        tabName: 'General Details',
        activateTab: 'general'
    },
    {
        tabName: 'Documents',
        activateTab: 'doc'
    },
    {
        tabName: 'Bank Details',
        activateTab: 'bank'
    },
    {
        tabName: 'Loans',
        activateTab: 'loans'
    },
    {
        tabName: 'Savings',
        activateTab: 'savings'
    },
    {
        tabName: 'App and System',
        activateTab: 'app'
    }]
const UserDetails = () => {
    const { state: { userId }, dispatch } = useContext(UserContext)
    const [activeTab, setActiveTab] = useState('general')

    const [backToUsers, setBackToUsers] = useState(false)

    const handleBackToUsers = () => {
        setBackToUsers(true)
    }

    const handleClick = (active: string) => {
        setActiveTab(active)
    }
    // const loaderUser = async () => {
    //     const resp = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
    //     const user = await resp.json()
    //     console.log(user)
    //     dispatch({
    //         type: 'get_user',
    //         payload: user
    //     })
    // }
    // console.log(userId)

    // useEffect(() => {
    //     loaderUser()
    // }, [])
    return (
        <>
            {backToUsers && <Navigate to='/users' replace={true} />}
            <div className="user-details">
                <div className="backToUsers">
                    <img src={backArrow} className='backArrow' alt="back Arrow" onClick={handleBackToUsers} />
                    <span>Back to Users</span>
                </div>
                <div className='headLines'>
                    <h3 className='user-heading'>User Details</h3>
                    <div className='user-btn'>
                        <button className='blacklist'>blacklist user</button>
                        <button className='activate'>activate user</button>
                    </div>
                </div>
                <div></div>
                {/* <MoreOptions /> */}
                <div className='profile'>
                    <div className='userInfo'>
                        <div className='userImg'>
                            <img src={profile} alt="user profile" />
                        </div>
                        <div className='nameOfUser'>
                            <span className='name'>Grace Effiom</span>
                            <span>LSQFf587g90</span>
                        </div>
                        <div className='userTier'>
                            <span>User's Tier</span>
                            <img src={star} alt="rating" className='rating' />
                        </div>
                        <div className='userAcc'>
                            <span className='name'>N200,000.00</span>
                            <span className='acc'>9912345678/Providus Bank</span>
                        </div>
                    </div>
                    <div className='tabs'>
                        {tabs.map((tab, index) => (
                            <span
                                key={index}
                                className={`${activeTab === tab.activateTab ? 'active' : ''} tab`}
                                onClick={() => handleClick(tab.activateTab)}
                            >{tab.tabName}</span>
                        ))}
                    </div>
                </div>
                <div>
                    {activeTab === 'general' ? <GeneralDetails /> : ''}
                </div>
            </div>
        </>
    )
}

export default UserDetails