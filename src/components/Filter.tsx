import React from 'react'
import '../styles/components/Filter.scss'

type hideFilter = {
    openFilter: boolean,
    filterRef: any
}

const Filter: React.FC<hideFilter> = ({ openFilter, filterRef }) => {
    const handleBtn = (e: any) => {
        e.preventDefault()
    }
    return (
        <div className={`${openFilter ? 'show' : 'hide'} filter`} ref={filterRef}>
            <form>
                <label htmlFor="org">Organization</label>
                <select name="org" id="org">
                    <option value="select">Select</option>
                    <option value="lendsqr">Lendsqr</option>
                </select>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='User' id='username' />
                <label htmlFor="date">Date</label>
                <input type="date" placeholder='Date' id='Date' />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='User' id='email' />
                <label htmlFor="phone">Phone Number</label>
                <input type="text" placeholder='User' id='phone' />
                <label htmlFor="org">Organization</label>
                <select name="status" id="status">
                    <option value="select">Select</option>
                    <option value="lendsqr">Lendsqr</option>
                </select>
                <div className='btns'>
                    <button className='reset' onClick={handleBtn}>Reset</button>
                    <button className='filter-btn' onClick={handleBtn}>Filter</button>
                </div>
            </form>
        </div>
    )
}

export default Filter