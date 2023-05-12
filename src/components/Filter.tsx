import { useEffect, useRef } from 'react'
import '../styles/components/Filter.scss'
import { hideFilter } from '../@types/global'


const Filter: React.FC<hideFilter> = ({ showFilter, close }) => {

    const filterRef = useRef<HTMLDivElement>(null)

    // check for a better approach
    const handleBtn = (e: any) => {
        e.preventDefault()
    }

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                close()
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <div className={`${showFilter ? 'show' : 'hide'} filter`} ref={filterRef}>
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