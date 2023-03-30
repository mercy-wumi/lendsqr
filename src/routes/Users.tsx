import Card from '../components/Card'
import '../styles/components/User.scss'

import activeUser from '../images/active-user.png'
import userSavings from '../images/user-savings.png'
import loanUser from '../images/loan-user.png'
import userIcon from '../images/user-icon.png'
import Filter from '../components/Filter'
import UserTable from '../components/UserTable'

const cards = [
    {
        cardIcon: userIcon,
        cardName: 'users',
        cardNum: '2,452',
        iconColor: 'rgba(223, 24, 255, 0.1)'
    },
    {
        cardIcon: activeUser,
        cardName: 'active users',
        cardNum: '2,453',
        iconColor: 'rgba(87, 24, 255, 0.1)'
    },
    {
        cardIcon: loanUser,
        cardName: 'users with loans',
        cardNum: '12,453',
        iconColor: 'rgba(245, 95, 68, 0.1)'
    }
    , {
        cardIcon: userSavings,
        cardName: 'users with savings',
        cardNum: '102,453',
        iconColor: 'rgba(255, 51, 102, 0.1)'
    }
]


const Users = () => {
    return (

        <div className='users'>
            <h3 className='user-heading'>Users</h3>
            <div className='card-container'>
                {cards.map((card, index) => (
                    <Card card={card} key={index} />
                ))}
            </div>
            {/* <Filter /> */}
            <UserTable />
        </div>
    )
}

export default Users