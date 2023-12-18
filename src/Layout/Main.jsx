
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { NavbarComponent } from "../Pages/Shared/Navbar/NavbarComponent";



const Main = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;