import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github, linked} from '../assets';



const Navbar = () => {

  // use state field
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className= {` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* help us to nav where we are currently on page */}
        <Link to="/" className="flex items-center gap-2" onClick={ () => {setActive(""); window.scrollTo(0, 0);  }}>
        <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>Benny Baby&nbsp;&nbsp;</p>
        </Link>

             {/* help us to nav where we are currently on page */}
             <Link to="https://www.linkedin.com/in/benny-b-001120207/" className="flex items-center gap-2" onClick={ () => {setActive(""); window.scrollTo(0, 0);  }}>
        <img width="32px" className="object-contain" src={linked} /> 
        </Link>
               {/* help us to nav where we are currently on page */}
               <Link to="https://github.com/BennyBaby23" className="flex gap-2" onClick={ () => {setActive(""); window.scrollTo(0, 0);  }}>
        <img width="32px" className="object-contain" src={github} />
        </Link>


        {/* Nav for home about and other details*/}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (<li key={link.id} className={`${active === link.title? "text.white" : "text-secondary"} hover:text-white text-[17px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}> <a href={`#${link.id}`}> {link.title} </a></li>))}
        </ul>
        

         {/* Nav for small devices to show in a block open and close*/}
        <div className ="sm:hidden flex flex-1 justify-end items-center"> 
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-28px] object-contin cursor-pointer" onClick={() =>setToggle(!toggle)}/>
        <div className={`${!toggle? 'hidden' : 'felx'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
 
        {/* same Nav for home about and other details up but this for small device after clicking the toggle menu*/}
        <ul className="list-none flex justify-end items-start flex-col gap-4">
        {navLinks.map((link) => (<li key={link.id} className={`${active === link.title? "text.white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {setToggle(!toggle); setActive(link.title);} }> <a href={`#${link.id}`}> {link.title} </a></li>))}
        </ul>


        </div>
        </div>


     


      </div>
    </nav>
  )
}

export default Navbar