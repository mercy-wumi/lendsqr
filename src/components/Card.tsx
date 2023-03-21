import '../styles/components/Card.scss'
import { card } from '../@types/global'


const Card: React.FC<card> = ({ card }) => {
    const { iconColor, cardIcon, cardName, cardNum } = card;
    return (
        <div className='card'>
            <div style={{ background: iconColor }} className='icon-bkg'>
                <img src={cardIcon} alt="Card Icon" />
            </div>
            <span className='nameOfCard'>{cardName}</span>
            <span className='numOnCard'>{cardNum}</span>
        </div>
    )
}

export default Card