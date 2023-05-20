import '../../styles/components/GeneralDetails.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { User } from '../../@types/global'
import { useLoaderData } from 'react-router-dom'


const GeneralDetails = () => {
    const { state: { user }, dispatch } = useContext(UserContext)

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
                        <p>Education and Employment</p>
                        <div className='info'>
                            <div className="personal">
                                <span className='caption'>Level of Education</span>
                                <span className='values'>{user.education.level}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Employment Status</span>
                                <span className='values'>{user.education.employmentStatus}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Sector of Employment</span>
                                <span className='values'>{user.education.sector}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Duration of Employment</span>
                                <span className='values'>{user.education.duration}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Office Email</span>
                                <span className='values'>{user.education.officeEmail}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Monthly Income</span>
                                <span className='values'>₦200,000.00</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Loan Repayment</span>
                                <span className='values'>{user.education.loanRepayment}</span>
                            </div>
                        </div>
                    </div>
                    <div className='personalInfo'>
                        <p>Socials</p>
                        <div className='info'>
                            <div className="personal">
                                <span className='caption'>Twitter</span>
                                <span className='values'>{user.socials.twitter}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Facebook</span>
                                <span className='values'>{user.socials.facebook}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Instagram</span>
                                <span className='values'>{user.socials.instagram}</span>
                            </div>
                        </div>
                    </div>
                    <div className='personalInfo'>
                        <p>Guarantor</p>
                        <div className='info'>
                            <div className="personal">
                                <span className='caption'>Full Name</span>
                                <span className='values'>{user.guarantor.firstName}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Phone Number</span>
                                <span className='values'>{user.guarantor.phoneNumber}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Email Address</span>
                                <span className='values'>{user.email}</span>
                            </div>
                            <div className="personal">
                                <span className='caption'>Relationship</span>
                                <span className='values'>{user.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                : <div>Loading...</div>}
        </>
    )
}

export default GeneralDetails