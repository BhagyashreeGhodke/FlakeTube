import React,  {useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Logo, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [selectedNavItem, setSelectedNavItem] = useState('');

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'About',
            slug: '/about',
            active: true,
        },
        {
            name: 'Contact',
            slug: '/contact',
            active: true,
        },
        
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/register',
            active: !authStatus,
        },
        
        
    ];
    const dashItems = [
        
        {
            name: 'Profile',
            slug: '/user-profile',
            active: authStatus,
        },
        {
            name: 'Chat',
            slug: '/chat-messages',
            active: authStatus,
        },
        {
            name: 'Chat Window',
            slug: '/chat-window',
            active: authStatus,
        },
        {
            name: 'DC',
            slug: '/dummy-cash',
            active: authStatus,
        },
    ];
    const handleNavItemChange = (event) => {
        const slug = event.target.value;
        setSelectedNavItem(slug);
        navigate(slug);
    };
    return (
        <header className="bg-gray-900 py-4">
            <Container>
                <nav className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <Logo width="70px" />
                    </Link>
                    <ul className="flex space-x-4">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.slug}
                                        className="text-white hover:text-gray-300"
                                        activeClassName="text-gray-300"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ) : null
                        )}
                        
                        {authStatus && ( <select
                                value={selectedNavItem}
                                onChange={handleNavItemChange}
                                className="px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white"
                            >
                                {dashItems.map((item) =>
                                    item.active ? (
                                        <option key={item.slug} value={item.slug}>
                                            {item.name}
                                        </option>
                                    ) : null
                                )}
                            </select>)}
                            <div className=' text-white space-x-4'>
                            {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                            </div>
                        
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
