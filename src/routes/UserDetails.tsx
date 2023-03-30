import { useState } from 'react'
import '../styles/components/UserDetails.scss'
import backArrow from '../images/backArrow.png'
import MoreOptions from '../components/MoreOptions'
import profile from '../images/profile.png'
import star from '../images/star.png'
import GeneralDetails from '../components/TabComponents/GeneralDetails'

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
    const [activeTab, setActiveTab] = useState('general')
    const handleClick = (active: string) => {
        setActiveTab(active)
    }
    return (
        <div className="user-details">
            <div className="backToUsers">
                <img src={backArrow} className='backArrow' alt="back Arrow" />
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
    )
}

export default UserDetails