import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoWhite } from '../assets';
import { LogoDark } from '../assets';


const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // make header dark for scrolled or rooms page
      if (window.scrollY > 50 || location.pathname === '/rooms') {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const navLinks = ['Home', 'Rooms', 'Restaurant', 'Spa', 'Contact'];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo */}
        <Link to="/" onClick={resetRoomFilterData}>
          {
            header
              ? <LogoDark className='w-[160px]' />
              : <LogoWhite className='w-[160px]' />
          }
        </Link>

        {/* Nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
        {
          navLinks.map(link =>
            <Link 
              to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              className='transition hover:text-accent' 
              key={link}
            >
              {link}
            </Link>
          )
        }
      </nav>


      </div>

    </header>
  );
};

export default Header;
