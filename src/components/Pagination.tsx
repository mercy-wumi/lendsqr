import '../styles/components/Pagination.scss'

const Pagination = () => {
    return (
        <div className='pagination'>
            <div>
                <span>Showing</span>
                <select name="userList" id="list">
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span>out of 100</span>
            </div>
            <div>
                <span>Next</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>15</span>
                <span>16</span>
                <span>Prev</span>
            </div>
        </div>
    )
}

export default Pagination