import '../styles/components/Sidebar.scss'

import home from '../images/home.png'
import arrow from '../images/arrow.png'
import audit from '../images/audit.png'
import badge from '../images/badge.png'
import briefcase from '../images/briefcase.png'
import fees from '../images/fees.png'
import guarantors from '../images/guarantors.png'
import handshake from '../images/handshake.png'
import karma from '../images/karma.png'
import logout from '../images/logout.png'
import preferences from '../images/preferences.png'
import report from '../images/report.png'
import request from '../images/request.png'
import sack from '../images/sack.png'
import saving from '../images/saving.png'
import serviceAcc from '../images/serviceAcc.png'
import services from '../images/services.png'
import settlements from '../images/settlements.png'
import systems from '../images/systems.png'
import transac from '../images/transac.png'
import users from '../images/users.png'
import whitelist from '../images/whitelist.png'
import savingProduct from '../images/savingProduct.png'


const menus = [
    {
        heading: 'customers',
        list: [
            {
                img: users,
                listName: 'users',
            },
            {
                img: guarantors,
                listName: 'guarantors',
            },
            {
                img: sack,
                listName: 'loans',
            },
            {
                img: handshake,
                listName: 'decision models',
            },
            {
                img: saving,
                listName: 'savings',
            },
            {
                img: request,
                listName: 'loan requests',
            },
            {
                img: whitelist,
                listName: 'whitelist',
            },
            {
                img: karma,
                listName: 'karma',
            }
        ]
    },
    {
        heading: 'businesses',
        list: [
            {
                img: briefcase,
                listName: 'Organization',
            },
            {
                img: request,
                listName: 'loan products',
            },
            {
                img: savingProduct,
                listName: 'saving products',
            },
            {
                img: fees,
                listName: 'fees and charges',
            },
            {
                img: transac,
                listName: 'transactions',
            },
            {
                img: services,
                listName: 'services',
            },
            {
                img: serviceAcc,
                listName: 'service account',
            },
            {
                img: settlements,
                listName: 'settlements',
            },
            {
                img: report,
                listName: 'reports',
            },
        ]
    },
    {
        heading: 'settings',
        list: [
            {
                img: preferences,
                listName: 'preferences',
            },
            {
                img: badge,
                listName: 'fees and pricing',
            },
            {
                img: audit,
                listName: 'audit logs',
            },
            {
                img: systems,
                listName: 'systems messages',
            },
        ]
    }
]
const Sidebar = () => {
    return (
        <div className='sidebar' id='side'>
            <div className='menusOrg'>
                <img src={briefcase} alt="menu icon" />
                <span className='menuOrg'>Switch Organization</span>
                <img src={arrow} alt="menu icon" className='arrow' />
            </div>
            <div className='dashboard'>
                <img src={home} alt="menu icon" />
                <span className='dash'>Dashboard</span>
            </div>
            <div className='menuList'>
                {menus.map((menu, index) => (
                    <ul key={index}>
                        <p className='heading'>{menu.heading}</p>
                        <ul>
                            {menu.list.map((list, index) => (
                                <li key={index}>
                                    <div className='menus'>
                                        <img src={list.img} alt="menu icon" />
                                        <span className='menuName'>{list.listName}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ul>
                ))}
            </div>
            <div className='logout'>
                <hr />
                <div className='menus'>
                    <img src={logout} alt="logout icon" />
                    <span className='menuName'>logout</span>
                </div>
                <p className='version'>v1.2.0</p>
            </div>
        </div>
    )
}

export default Sidebar