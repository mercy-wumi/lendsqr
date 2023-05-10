import activate from '../images/activate.png'
import blacklist from '../images/blacklist.png'
import view from '../images/view.png'

import '../styles/components/MoreOptions.scss'
import { UserContext } from '../context/UserContext'
import { useContext, useState } from 'react'


const options = [
    {
        img: view,
        option: 'view details'
    },
    {
        img: blacklist,
        option: 'blacklist user'
    },
    {
        img: activate,
        option: 'activate user'
    }
]
type idType = {
    showMoreOptions: boolean
}
const MoreOptions: React.FC<idType> = ({ showMoreOptions }) => {
    const [show, setShow] = useState(false)
    const { state: { userId }, dispatch } = useContext(UserContext)

    return (
        <div className={`${showMoreOptions ? 'show' : 'hide'} moreOptions`}>
            {options.map((option, index) => (
                <div className='options' key={index}>
                    <img src={option.img} alt={option.option} className='optionImg' />
                    <span>{option.option}</span>
                </div>
            ))}
        </div>
    )
}

export default MoreOptions