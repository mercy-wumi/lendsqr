import activate from '../images/activate.png'
import blacklist from '../images/blacklist.png'
import view from '../images/view.png'

import '../styles/components/MoreOptions.scss'
import { UserContext } from '../context/UserContext'
import { useContext, useState, useEffect, useRef } from 'react'
import { hideMoreOptions } from '../@types/global'


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

const MoreOptions: React.FC<hideMoreOptions> = ({ showMoreOptions, closeOptions }) => {

    const moreOptionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (moreOptionRef.current && !moreOptionRef.current.contains(e.target as Node)) {
                closeOptions()
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    const [show, setShow] = useState(false)
    const { state: { userId }, dispatch } = useContext(UserContext)

    return (
        <div className={`${showMoreOptions ? 'show' : 'hide'} moreOptions`} ref={moreOptionRef}>
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