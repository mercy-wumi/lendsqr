import Filter from './Filter'
import MoreOptions from './MoreOptions'

import '../styles/components/UserTable.scss'
import more from '../images/more.png'
import filter from '../images/filter.png'
import StatusBtn from './StatusBtn'

import { useLoaderData } from "react-router-dom"
import { User } from '../@types/global'
import { useState, useLayoutEffect } from 'react'

const heading = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']

const UserTable = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [showMoreOptions, setShowMoreOptions] = useState(false)
    const [userId, setUserId] = useState('')
    const [random, setRandom] = useState('')

    const users = useLoaderData() as User[]

    console.log(users)
    const status = ['active', 'pending', 'inactive', 'blacklisted']
    // let random: string;

    const handleShowOptions = (id: string) => {
        setShowMoreOptions(!showMoreOptions)
    }
    const handleClick = (id: string) => {
        setUserId(id)
    }
    console.log(userId)
    // useLayoutEffect(() => {
    //     setRandom(Math.floor(Math.random() * 4).toString())
    //     console.log(random)
    // }, [random])

    return (
        <div className='user-table'>
            <table>
                <thead>
                    <tr className='rows'>
                        {heading.map((th, index) => (
                            <th key={index} className='head'>
                                <div className='th-row'>
                                    <span>{th}</span>
                                    <img src={filter} alt="filter icon" className='filter' onClick={() => setShowFilter(!showFilter)} />
                                    {/* {showFilter ? <Filter /> : null} */}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0, 10).map((user) => (
                        <tr className='td-row' key={user.id} onClick={() => handleClick(user.id)}>
                            <td>Lendsqr</td>
                            <td>{user.profile.firstName}{' '}{user.profile.lastName}</td>
                            <td>{user.email}</td>
                            <td>08078903721</td>
                            <td>{user.createdAt.slice(0, 10)}</td>
                            <td>
                                <StatusBtn text={status[Math.floor(Math.random() * 4)]} />
                            </td>
                            <td>
                                <div className='showingOptions'>
                                    <img src={more} alt="more option" onClick={() => handleShowOptions(user.id)} />
                                    {showMoreOptions ? <MoreOptions /> : null}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable