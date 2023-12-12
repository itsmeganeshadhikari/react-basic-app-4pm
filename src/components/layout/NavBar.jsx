import { Outlet } from 'react-router-dom';
import logo from '../../assets/cod.png'
import PageLinks from './PageLinks';
const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} alt="logo" className='nav-logo' />
                    </div>
                </div>
                <PageLinks parentClass='nav-links' itemClass='nav-link' />
            </nav>
        </>)
}

export default NavBar;