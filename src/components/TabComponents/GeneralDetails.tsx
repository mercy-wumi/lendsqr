import '../../styles/components/GeneralDetails.scss'

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
    return (
        <div className='general'>
            <div className='personalInfo'>
                <p>Personal Information</p>
                <div className='info'>
                    <div className="personal">
                        <span className='caption'>Full Name</span>
                        <span className='values'>{general.personal.fullname}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Phone Number</span>
                        <span className='values'>{general.personal.phone}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Email Address</span>
                        <span className='values'>{general.personal.email}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>bvn</span>
                        <span className='values'>{general.personal.bvn}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Marital Status</span>
                        <span className='values'>{general.personal.status}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Children</span>
                        <span className='values'>{general.personal.children}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Type of Residence</span>
                        <span className='values'>{general.personal.residence}</span>
                    </div>
                </div>
            </div>

            <div className='personalInfo'>
                <p>Personal Information</p>
                <div className='info'>
                    <div className="personal">
                        <span className='caption'>Full Name</span>
                        <span className='values'>{general.personal.fullname}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Phone Number</span>
                        <span className='values'>{general.personal.phone}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Email Address</span>
                        <span className='values'>{general.personal.email}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>bvn</span>
                        <span className='values'>{general.personal.bvn}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Marital Status</span>
                        <span className='values'>{general.personal.status}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Children</span>
                        <span className='values'>{general.personal.children}</span>
                    </div>
                    <div className="personal">
                        <span className='caption'>Type of Residence</span>
                        <span className='values'>{general.personal.residence}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails