

// import image from "../../../assets/time.jpg";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button,  } from "keep-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

// import { useTheme, setTheme } from 'daisyui';
// import { setStoredTheme } from './theme.jsx';

export const NavbarComponent = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = () => {
    // Perform the search action with the searchTerm
    console.log('Searching for:', searchTerm);
    // You can add your search logic here
    setIsSearchOpen(false);
  };


const manuItems = [
  {
    root: "latest",
    name: "সর্বশেষ" 
  },
  {
    root: "national",
    name: "জাতীয়"
  },
  {
    root: "politics",
    name: "রাজনীতি"
  },
  {
    root: "economy",
    name: "অর্থনীতি"
  },
  {
    root: "international",
    name: "আন্তজাতিক"
  },
  {
    root: "entertainment",
    name: "বিনোদন"
  },
  {
    root: "jobs",
    name: "চাকুরীর খবর" 
  },
  {
    root: "sports",
    name: "খেলাধুলা"
  },
  {
    root: "allbd",
    name: "সারাদেশ"
  }
]

// const { dark } = useTheme();

// const toggleTheme = () => {
//   const newTheme = dark ? 'light' : 'dark';
//   setTheme({ dark: !dark });
//   setStoredTheme(newTheme);
// };

  return (
    <>
      {isSearchOpen ? (
        <div className="flex items-center">
          <input
           className="w-[100%] h-auto m-4 p-3"
            type="text"
            placeholder=" Please Search Your Items "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="p-3" size="sm" type="link" onClick={handleSearch}>
                Search
          </Button>
          <Button className="p-3" size="sm" type="link" onClick={handleSearch}>
                 Delete
          </Button>
        </div>
      ) : ( 
    <Navbar className="bg-accent text-white mb-30 " fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
 
           <NavLink  to="/">  <img
              src="https://i.ibb.co/5FdSh8b/R.jpg"
              alt="keep"
              width="100"
              height="100"
            /></NavLink> 
            
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 "
          >
              {manuItems.map((aa, index) => (
              <NavLink key={index} to={aa.root}>
                {aa.name}
              </NavLink>
            ))}

            {/* <NavLink to="opinion">OPINION</NavLink>       */}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-co  gap-5">
            
            {manuItems.map((aa, index) => (
              <NavLink key={index} to={aa.root}>
                {aa.name}
              </NavLink>
            ))}

            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button   size="sm" type="link">     
             <span >            
             <a><FaRegMoon className="h-5 w-5" /></a>
            </span>
          </Button>
          <Button size="sm" type="link">
            <span>            
                    <a><IoMdNotifications className="h-6 w-6" /></a>                  
            </span>
          </Button>




        <div>
              <Button size="sm" type="link" onClick={() => setIsSearchOpen(true)}>
                <span>
                  <MagnifyingGlass size={25} color="white" />
                </span>
              </Button>
              {isSearchOpen && (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button size="sm" type="link" onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              )}
            </div>

          <div  className="ml-1 mt-3 text-metal-100 text-2xl"> 
<div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="bg-accent">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      
            <ul className="menu p-4 gap-4 text-xl w-80 min-h-full bg-base-200 text-base-content">
            {manuItems.map((aa, index) => (
                <NavLink key={index} to={aa.root}>
                  {aa.name}
                </NavLink>
              ))}
      </ul>
            
    </div>
  </div>
          </div>

          
          <Navbar.Toggle />
        </Navbar.Container>
        
      </Navbar.Container>
    </Navbar>
     )}
     </>
  );
}
