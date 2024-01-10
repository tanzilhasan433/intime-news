import { Navbar } from "keep-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  
  const menubar = [

    {
      root: "weather",
      name: "আবহাওয়া >",
    },
    {
      root: "bnp",
      name: "বিএনপি >", 
    },
    {
      root: "election",
      name: "নির্বাচন >",
    },
    {
      root: "job-news",
      name: "চাকুরী >",
    },
    {
      root: "job-news",
      name: "জাতীয় পার্টি >",
    },
    {
      root: "job-news",
      name: "আওয়ামী লীগ >",
    },
    {
      root: "job-news",
      name: "নামাজের সময়সূচী >",
    },
    {
      root: "job-news",
      name: "নৌকার মনোনয়ন >",
    },
  ];
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="mt-32 flex items-center  justify-between ">
        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex sm:hidden flex-col gap-8  ">
            {menubar.map((a, index) => (
              <NavLink key={index} to={a.root}>
                {a.name}
              </NavLink>
            ))}

            {menubar.map((a, index) => (
              <NavLink key={index} to={a.root}>
                {a.name}
              </NavLink>
            ))}


            
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-2 ">
          <Navbar.Container
            tag="ul"
            className="lg:flex  items-center justify-between  hidden  gap-2 "
          >
            <NavLink to="/trending"  className="bg-cyan-900 m-1 p-1 text-white"> ট্রেন্ডিং </NavLink>
            {menubar.map((a, index) => (
              <NavLink className="bg-slate-100 m-1 p-1"
              key={index} 
              to={a.root}>
                {a.name}
              </NavLink>
            ))}

          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default Header;
