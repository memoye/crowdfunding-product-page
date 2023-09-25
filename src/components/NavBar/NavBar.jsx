import './navBar.scss'
import { close_menu, hamburger, logo } from '../../assets'
import { useState } from 'react';
import { useRef } from 'react';

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const mobileNav = useRef()

    function handleHamburger() {
        setHamburgerOpen(prev => !prev)
    }



    return (
        <nav className='navBar'>

            <img className='logo' src={ logo } alt="crowdfund logo" />

            <ul className='desktopNav'>
                <li><a href='#about'>About</a></li>
                <li><a href='#discover'>Discover</a></li>
                <li><a href='#getstarted'>Get Started</a></li>
            </ul>

            <div className='mobileNav'>
                <button className='hamburger'
                    onClick={ handleHamburger }
                >
                    <img src={ hamburger } alt='menu' />
                </button>

                { hamburgerOpen &&
                    (<ul className='mobileNavLinks' ref={ mobileNav }>
                        <button className='close'
                            onClick={ handleHamburger }
                        >
                            <img src={ close_menu } alt='menu' />
                        </button>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#discover'>Discover</a></li>
                        <li><a href='#getstarted'>Get Started</a></li>
                    </ul>) }
            </div>
        </nav>
    )
}
export default NavBar