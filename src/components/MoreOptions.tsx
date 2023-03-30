import activate from '../images/activate.png'
import blacklist from '../images/blacklist.png'
import view from '../images/view.png'

import '../styles/components/MoreOptions.scss'

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
const MoreOptions = () => {
    return (
        <div className='moreOptions'>
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