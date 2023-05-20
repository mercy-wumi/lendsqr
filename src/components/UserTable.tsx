import Filter from './Filter'
import MoreOptions from './MoreOptions'

import '../styles/components/UserTable.scss'
import more from '../images/more.png'
import filter from '../images/filter.png'
import StatusBtn from './StatusBtn'

import { Navigate, useLoaderData } from "react-router-dom"
import { User } from '../@types/global'
import { useState, useLayoutEffect, useContext, useRef, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { paginateTableType } from '../@types/global'

const heading = [
    {
        id: '1',
        name: 'Organization'
    }, {
        id: '2',
        name: 'Username'
    }, {
        id: '3',
        name: 'Email'
    }, {
        id: '4',
        name: 'Phone Number'
    }, {
        id: '5',
        name: 'Date Joined'
    },
    {
        id: '6',
        name: 'Status'
    },

]

const UserTable: React.FC<paginateTableType> = ({ currentItems }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [showMoreOptions, setShowMoreOptions] = useState(false)

    const [clicked, setClicked] = useState(false)

    const { state: { users }, dispatch } = useContext(UserContext)


    const filterMenuRef = useRef(null)


    console.log(users)
    const status = ['active', 'pending', 'inactive', 'blacklisted']
    const [id, setId] = useState('')
    const [headFilter, setHeadFilter] = useState('')
    const [moreOptions, setMoreOptions] = useState('')

    const handleShowOptions = (id: string) => {
        setClicked(false)
        setMoreOptions(id)
        setShowMoreOptions(true)
    }
    const handleOnClickOutSide = () => {
        setShowFilter(false)
    }
    const handleOnClickOutSideOption = () => {
        setShowMoreOptions(false)
        setMoreOptions('')
        setClicked(false)
    }
    const handleFilter = (id: string) => {
        setShowFilter(true)
        setHeadFilter(id)
    }
    const handleClick = (id: string) => {
        setId(id)
        dispatch({
            type: 'set_user_id',
            payload: id
        })
        const loader = async () => {
            console.log('fetching...')
            const resp = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
            const user = await resp.json()
            console.log(user)
            dispatch({
                type: 'get_user',
                payload: user
            })
            console.log('fetching...')
            if (user) {
                console.log(moreOptions)
                setClicked(true)
            }
        }
        loader()
    }

    return (
        <>
            {clicked && moreOptions === '' && <Navigate to='/dashboard/userdetails' replace={true} />}
            <div className='user-table'>
                <table>
                    <thead>
                        <tr className='rows'>
                            {heading.map((th, index) => (
                                <th key={th.id} className='head'>
                                    <div className='th-row'>
                                        <div className='head-column'>
                                            <span>{th.name}</span>
                                            <img src={filter} alt="filter icon" className='filter-img' ref={filterMenuRef} onClick={() => handleFilter(th.id)} />
                                        </div>
                                    </div>
                                    {headFilter === th.id && <Filter showFilter={showFilter} close={handleOnClickOutSide} />}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.map((user) => (
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
                                    <img src={more} alt="more option" onClick={() => handleShowOptions(user.id)} />
                                    <div className='showOptions'>
                                        {moreOptions === user.id && <MoreOptions showMoreOptions={showMoreOptions} closeOptions={handleOnClickOutSideOption} />}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default UserTable