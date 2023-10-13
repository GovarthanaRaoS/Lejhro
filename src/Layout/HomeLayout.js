import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import 'boxicons';

const HomeLayout = () => {

    const [windowWidth ,setWindowWidth] = useState(window.innerWidth);
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const menuRef = useRef();
    const navigate = useNavigate()

    useEffect(()=>{
        window.addEventListener('resize',function(){
            setWindowWidth(this.window.innerWidth)
        })
    },[])

    useEffect(()=>{
        if(windowWidth>=950){
            setIsMenuClicked(false);
        }
    },[windowWidth])

    useEffect(()=>{
        const handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                console.log('Clicked Outside');
                setIsMenuClicked(false);
            }
        }

        document.addEventListener('mousedown',handler);

        return ()=>{
            document.removeEventListener('mousedown',handler);
        }

    },[])

    const handleNavigateToHome = () =>{
        setIsMenuClicked(false)
        navigate('/');
    }

    const handleShowMenu = (event) =>{
        setIsMenuClicked(!isMenuClicked);
    }

  return (
    <div className='home-layout-container'>
        <header className='header-container'>
            <nav className='navigation-container'>
                <div className="logo-image" onClick={handleNavigateToHome}></div>
                {windowWidth>=950 && <ul className='menu-list nav'>
                        <li className='nav-item'><NavLink className='nav-link' to='/'>Innovations</NavLink></li>
                        <li className='nav-item'><NavLink className='nav-link' to='/'>Business Services</NavLink></li>
                        <li className='nav-item'><NavLink className='nav-link' to='/'>Financial Services</NavLink></li>
                        <li className='nav-item'><NavLink className='nav-link' to='/'>Bootcamp</NavLink></li>
                </ul>}
                {windowWidth<950 && <i className='bx bx-menu menu-icon' onClick={handleShowMenu}></i>}
        {/*Sidebar contents*/}

        <div className={`side-bar-container ${isMenuClicked?'showMenu':'hideMenu'}`} ref={menuRef}>
            <div className="logo-close-container">
                <div className="side-logo-image" onClick={handleNavigateToHome}></div>
                <i className='bx bx-x close-icon' onClick={()=>setIsMenuClicked(false)}></i>
            </div>
            <ul className="side-menu-list">
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Innovations</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Business Services</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Financial Services</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Bootcamp</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='about' onClick={()=>setIsMenuClicked(false)}>About</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Contact us</NavLink></li>
                <hr />
                <li className='nav-item'><NavLink className='nav-link' to='/' onClick={()=>setIsMenuClicked(false)}>Blogs</NavLink></li>
                <hr />
                <li className='nav-item'>
                    <span className='icons'><i className='bx bxl-twitter' ></i></span>
                    <span className='icons'><i className='bx bxl-instagram-alt' ></i></span>
                    <span className='icons'><i className='bx bxl-youtube' ></i></span>
                    <span className='icons'><i className='bx bxl-facebook-circle' ></i></span>
                </li>
            </ul>
        </div>

    {/* End of Sidebar*/} 
            </nav>
        </header>
        <main className="main-container">
            <Outlet/>
        </main>
        <footer className='footer-container'>
            <div className="footer-details-container">
                <div className="company-info-container">
                    <h2>Company</h2>
                    <ul>
                        <li><NavLink to='/'>Innovations</NavLink></li>
                        <li><NavLink to='/'>Business Services</NavLink></li>
                        <li><NavLink to='/'>Financial Services</NavLink></li>
                        <li><NavLink to='/'>Lejhro Recruiter</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="programs-info-container">
                    <h2>Programs</h2>
                    <ul>
                        <li><NavLink to='/'>Lejhro Bootcamp</NavLink></li>
                    </ul>
                </div>
                <div className="support-info-container">
                    <h2>Support</h2>
                    <ul>
                        <li><NavLink to='/'>Contact</NavLink></li>
                        <li><NavLink to='/'>Terms of Use</NavLink></li>
                        <li><NavLink to='/'>Privacy statement</NavLink></li>
                    </ul>
                </div>
                <div className='connect-info-container'>
                    <h2>Connect with us</h2>
                    <div className="footer-icons-container">
                        <span className='icons'><i className='bx bxl-twitter' ></i></span>
                        <span className='icons'><i className='bx bxl-instagram-alt' ></i></span>
                        <span className='icons'><i className='bx bxl-youtube' ></i></span>
                        <span className='icons'><i className='bx bxl-facebook-circle' ></i></span>
                    </div>
                </div>
            </div>
            <div className="copyright-info-container">
                <p>&copy; 2023 LEJHRO. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default HomeLayout