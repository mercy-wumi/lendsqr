import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import '../styles/pages/Users.scss'

import { UserContext } from '../context/UserContext'
import activeUser from '../images/active-user.png'
import userSavings from '../images/user-savings.png'
import loanUser from '../images/loan-user.png'
import userIcon from '../images/user-icon.png'
import UserTable from '../components/UserTable'
import Pagination from '../components/Pagination'
import { useLoaderData } from 'react-router-dom'
import { User } from '../@types/global'

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



export const loaderUsers = async () => {
    const resp = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const users = await resp.json()
    console.log(users)
    return users
}

// export const loaderUser = async () => {
//     const resp = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
//     const user = await resp.json()
//     // dispatch({
//     //     type: 'get_user',
//     //     payload: user
//     // })
//     return user
// }


const Users = () => {
    const users = useLoaderData() as User[]
    console.log(users)

    // const { state: { userId }, dispatch } = useContext(UserContext)

    const { state: { userPerPage, userOffSet }, dispatch } = useContext(UserContext)

    const endOffset = userOffSet + parseInt(userPerPage);
    console.log(`Loading items from ${userOffSet} to ${endOffset}`);
    const currentItems = users.slice(userOffSet, endOffset);

    // useEffect(() => {
    //     dispatch({
    //         type: 'get_all_users',
    //         payload: users
    //     })
    // })

    // useEffect(() => {
    //     const loader = async () => {
    //         const resp = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    //         const users = await resp.json()
    //         dispatch({
    //             type: 'get_all_users',
    //             payload: users
    //         })
    //     }
    //     loader()
    // }, [])

    return (
        <>
            <div className='users'>
                <h3 className='user-heading'>Users</h3>
                <div className='card-container'>
                    {cards.map((card, index) => (
                        <Card card={card} key={index} />
                    ))}
                </div>
                <UserTable currentItems={currentItems} />
                <Pagination />
            </div>
        </>
    )
}

export default Users