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

const UserTable = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [showMoreOptions, setShowMoreOptions] = useState(false)

    const [openFilter, setOpenFilter] = useState(false)

    // const handleOutsideClick = () => {
    //     setShowFilter(false);
    // };


    // const [user, setUser] = useState(null)
    // const [userId, setUserId] = useState('')
    const [clicked, setClicked] = useState(false)
    // const [random, setRandom] = useState('')

    const { state: { users }, dispatch } = useContext(UserContext)

    const first_ten_users = users.slice(0, 10)

    const filterRef: any = useRef()
    const filterMenuRef: any = useRef()
    const moreOptionsRef = useRef()


    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         const modal = document.getElementById('modalFilter');
    //         if (modal && !modal.contains(event.target as Node)) {
    //             handleOutsideClick();
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node) && !filterMenuRef.current.contains(e.target as Node)) {
                setOpenFilter(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    // const users = useLoaderData() as User[]

    console.log(users)
    const status = ['active', 'pending', 'inactive', 'blacklisted']
    // let random: string;
    const [id, setId] = useState('')
    const [headFilter, setHeadFilter] = useState('')
    const [moreOptions, setMoreOptions] = useState('')

    const handleShowOptions = (id: string) => {
        setClicked(false)
        setMoreOptions(id)
        setShowMoreOptions(true)
    }
    const handleFilter = (id: string) => {
        setShowFilter(!showFilter)
        setHeadFilter(id)
        setOpenFilter(true)
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
            if (user) { setClicked(true) }
        }
        loader()
    }


    // useLayoutEffect(() => {
    //     setRandom(Math.floor(Math.random() * 4).toString())
    //     console.log(random)
    // }, [random])

    return (
        <>
            {clicked && <Navigate to='/userdetails' replace={true} />}
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
                                    {headFilter === th.id && <Filter openFilter={openFilter} filterRef={filterRef} />}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users && first_ten_users.map((user) => (
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
                                        {moreOptions === user.id && <MoreOptions showMoreOptions={showMoreOptions} />}
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