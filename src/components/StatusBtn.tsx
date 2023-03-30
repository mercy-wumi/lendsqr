import { btn } from "../@types/global"
import '../styles/components/UserTable.scss'

const StatusBtn: React.FC<btn> = ({ text }) => {
    return (
        <button
            className={`${text === 'active' ? 'active' : text === 'inactive' ? 'inactive' : text === 'pending' ? 'pending' : 'blacklisted'} btn`}
        >{text}</button>
    )
}

export default StatusBtn