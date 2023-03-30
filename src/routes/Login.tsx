import lendsqrLogo from '../images/lendsqrLogo.png'
import pablo from '../images/pablo.png'
import { Navigate } from 'react-router-dom'
import '../styles/pages/Login.scss'
import { useState } from 'react'

const Login = () => {

    const [login, setLogin] = useState(false)
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoginDetails({
            ...loginDetails,
            [name]: value
        })

    }

    const handleSubmit = () => {
        if (loginDetails.email === '' && loginDetails.password === '') return
        setLogin(true)
    }
    return (
        <>
            {login && <Navigate to='/dashboard' replace={true} />}
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
                                <input
                                    type="text"
                                    placeholder='Email'
                                    name='email'
                                    value={loginDetails.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='inputs'>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    value={loginDetails.password}
                                    onChange={handleChange}
                                />
                                <span>show</span>
                            </div>
                            <p className='forget'>forgot password?</p>
                            <button type='button' onClick={handleSubmit}>log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login