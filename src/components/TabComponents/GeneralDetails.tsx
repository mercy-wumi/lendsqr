import '../../styles/components/GeneralDetails.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { User } from '../../@types/global'
import { useLoaderData } from 'react-router-dom'

const general = {
    personal: {
        fullname: 'Grace Effiom',
        phone: '07060780922',
        email: 'grace@gmail.com',
        bvn: '07060780922',
        status: 'single',
        children: 'none',
        residence: "Parent's Apartment"
    },
    education: {
        level: 'B.Sc',
        employment: 'Employed',
        sector: 'FinTech',
        duration: '2 years',
        officeEmail: 'grace@lendsqr.com',
        income: 'N200,000.00 - N400,000.00',
        loan: '40,000'
    }
}

const GeneralDetails = () => {
    const { state: { user }, dispatch } = useContext(UserContext)
    console.log(user)

    // const {user} = useLoaderData() as User
    return (
        <>
            {user ?
                <div className='general'>
                    <div className='personalInfo'>
                        <p>Personal Information</p>
                        <div className='info'>
                            <div className="personal">
                                <span className='caption'>Full Name</span>
                                <span className='values'>{user.profile.firstName}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Phone Number</span>
                                <span className='values'>{user.phoneNumber}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Email Address</span>
                                <span className='values'>{user.email}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>bvn</span>
                                <span className='values'>{user.profile.bvn}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Marital Status</span>
                                <span className='values'>Single</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Children</span>
                                <span className='values'>None</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Type of Residence</span>
                                <span className='values'>Parental Residence</span>
                            </div>
                        </div>
                    </div>
                    <div className='personalInfo'>
                        <p>Personal Information</p>
                        <div className='info'>
                            <div className="personal">
                                <span className='caption'>Full Name</span>
                                <span className='values'>{user.profile.firstName}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Phone Number</span>
                                <span className='values'>{user.phoneNumber}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Email Address</span>
                                <span className='values'>{user.email}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>bvn</span>
                                <span className='values'>{user.profile.bvn}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Marital Status</span>
                                <span className='values'>Single</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Children</span>
                                <span className='values'>None</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Type of Residence</span>
                                <span className='values'>Parental Residence</span>
                            </div>
                        </div>
                    </div>
                </div>
                : <div>Loading...</div>}
        </>
    )
}

export default GeneralDetails