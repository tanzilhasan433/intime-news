

// import image from "../../../assets/time.jpg";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button,  } from "keep-react";
import { NavLink } from "react-router-dom";

export const NavbarComponent = () => {

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

  return (
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
          <Button size="sm" type="link">
            <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>

            </span>
          </Button>
          <Button size="sm" type="link">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
            </span>
          </Button>

          <Button size="sm" type="link">
                <span>
                  <MagnifyingGlass size={25} color="white" />
                </span>
          </Button>
          <Button size="xs" type="outlineGray">
            <span className="ml-1 text-metal-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
        
      </Navbar.Container>
    </Navbar>
  );
}
