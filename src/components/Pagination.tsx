import '../styles/components/Pagination.scss'
import { useEffect, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import { UserContext } from '../context/UserContext'
import { useLoaderData } from 'react-router-dom'
import { User } from '../@types/global'


const Pagination = () => {
    const users = useLoaderData() as User[]

    const { state: { userPerPage }, dispatch } = useContext(UserContext)

    const pageCount = Math.ceil(users.length / parseInt(userPerPage));

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * parseInt(userPerPage)) % users.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        dispatch({
            type: 'set_user_offset',
            payload: newOffset
        })
    };
    const handleUserPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        dispatch({
            type: 'set_user_per_page',
            payload: e.target.value
        })
    }

    return (
        <div className='pagination'>
            <div>
                <span>Showing</span>
                <select name="userList" id="list" onChange={handleUserPerPage}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span>out of 100</span>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className='paginate'
            />
        </div>
    )
}

export default Pagination