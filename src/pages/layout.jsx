// Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from "../assets/img/Vayuz_logo.png";
import Left_image from "../assets/img/left_image.png";

const Layout = () => {
    return (
        <div className='main_div'>
            <div className='sidebar'>
                <div className='sidebar_main'>
                    <div className='sidebar_main_div'>
                        <div className='main_logo'>
                            <Link to="/"><img src={logo} alt="Vayuz" style={{ width: '100%' }} /></Link>
                        </div>
                        <div className='contct_us'>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                        <div className='other_pages'>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/app-development">App Development</Link></li>
                                <li><Link to="/challenges">Challenges</Link></li>
                                <li><Link to="/hire-developer">Hire Developer</Link></li>
                                <li><Link to="/community">Community</Link></li>
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

            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;