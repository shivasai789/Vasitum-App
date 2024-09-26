import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import './index.css'

const Header = () => {
    return (
        <>
        <div className='header-container'>
            <div style={{display: 'flex'}}>
            <RxHamburgerMenu className="hamburger-menu"/>
            <div className="search-container">
            <input type="search" id="search" className="input-field" placeholder="Search" />
            <label htmlFor="search"><CiSearch style={{fontSize: '20px'}}/></label>
            </div>
            <div className="sm-seach-cont">
            <CiSearch style={{fontSize: '20px'}}/>
            </div> 
            </div>
            <div className="notification-icons-profile-cont">
                <div className="notification-icon-cont">
                <div className="red-dot"></div>
                <IoMdNotifications className="header-icons"/>
                </div>
                <IoChatboxEllipses className="header-icons"/>
                <div className="profile-cont">
                    <img src="user-profile.png" alt="profile" className="profile-pic" />
                    <p style={{marginRight: '10px'}}>Admirra John</p>
                    <FaChevronDown/>
                </div>

            </div>
        </div>
        <hr className="header-line"/>
        </>
    )
}

export default Header