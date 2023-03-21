import '../styles/components/Navbar.scss'
import lendsqrLogo from '../images/lendsqrLogo.png'
import notification from '../images/notification.png'
import arrow from '../images/arrow-down.png'
import search from '../images/search.png'
import Amanda from '../images/Amanda.png'

const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <img src={lendsqrLogo} alt="logo" />
                <div className='search-nav'>
                    <input type="text" placeholder='Search for anything' />
                    <img src={search} alt="search icon" />
                </div>
                <div className='profile-sec'>
                    <a href="/">Docs</a>
                    <img src={notification} alt="notification icon" className='notify' />
                    <div className='person-pix'>
                        <img src={Amanda} alt="person" />
                        <span>Adedeji</span>
                        <img src={arrow} alt="arrow down" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar