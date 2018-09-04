import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (

    <header className='header-part'>
        <div className="container">
            <div className="menu-part-outer">
                <div className="menu-part">
                    <ul>
                    <li className="active"><Link to='/'>Home</Link></li>
                    <li className="has-child"><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                    <li className="logo"><Link to='/'></Link></li>
                    <li className="has-child">
                        <Link to='/events'>>events<span className="caret"></span></Link>
                        <ul className="sub-menu">
                        <li><a href="event-detail.php">event detail</a></li>
                        </ul>
                    </li>
                    <li className="has-child">
                        <Link to='/news'>News <span className="caret"></span></Link>
                        <ul className="sub-menu">
                        <li><a href="post-detail.php">News Detail</a></li>
                        </ul>
                    </li>
                    <li><Link to='/comtact'>contact</Link></li>
                    </ul>
                </div> 
            </div> 
        </div>       
    </header>
    
);

export default Header;