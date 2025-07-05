// Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from "../assets/img/Vayuz_logo.png";
import Left_image from "../assets/img/left_image.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Layout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };


    const navigate = useNavigate();


    return (
        <div className='main_div'>

            {/* Hamburger Button */}
            {/* {!sidebarOpen && ( */}
            <div className='hamburger_menu' onClick={toggleSidebar}>
                <div className='hamburger_icon'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div
                    className='hamburger_logo'
                    onClick={(e) => {
                        e.stopPropagation(); // ✅ Prevent toggleSidebar
                        navigate('/');
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Vayuz" className="hamburger_logo" />
                </div>
            </div>
            {/* )} */}

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                {/* Close Button */}
                <button className="close_btn" onClick={closeSidebar}>×</button>
                <div className='sidebar_main'>
                    <div className='sidebar_main_div'>
                        <div className='main_logo'>
                            <Link to="/"><img src={logo} alt="Vayuz" style={{ width: '100%' }} /></Link>
                        </div>
                        <div className='contct_us'>
                            <Link to="/formDetails" onClick={closeSidebar}>Contact Us</Link>
                        </div>
                        <div className='other_pages'>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/app-development" onClick={closeSidebar}>App Development</Link></li>
                                <li><Link to="/challenges" onClick={closeSidebar}>Challenges</Link></li>
                                <li><Link to="/hire-developer" onClick={closeSidebar}>Hire Developer</Link></li>
                                <li><Link to="/community" onClick={closeSidebar}>Community</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='left_sidebar_div'>
                        <div className='side_var_img_txt'>
                            <img src={Left_image} alt="Side Visual" style={{ width: '100%' }} />
                            <p>Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`content ${sidebarOpen ? 'content-shrink' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;