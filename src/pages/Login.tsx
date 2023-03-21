import lendsqrLogo from '../images/lendsqrLogo.png'
import pablo from '../images/pablo.png'
import '../styles/pages/Login.scss'

const Login = () => {
    return (
        <div className='login'>
            <img src={lendsqrLogo} alt="logo" />
            <div className='login-details'>
                <img src={pablo} alt="login" />
                <div className='details'>
                    <div className='headlines'>
                        <h3>Welcome!</h3>
                        <p className='headlines-note'>Enter details to login</p>
                    </div>
                    <form action="">
                        <div className='inputs'>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className='inputs'>
                            <input type="password" placeholder='Password' />
                            <span>show</span>
                        </div>
                        <p className='forget'>forgot password?</p>
                        <button type='button'>log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login