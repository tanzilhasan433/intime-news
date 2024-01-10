import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-white text-error-content">
        <div className="navbar flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                <NavLink to="/">
                    <img
                        src="https://i.ibb.co/5FdSh8b/R.jpg"
                        alt="keep"
                        className="w-16 h-16 md:w-20 md:h-20"
                    />
                </NavLink>
            </div>
            <div className="flex-none">
                <p>সম্পাদকঃ তানজিল হাসান</p>
            </div>
        </div>
        <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">গোপনীয়তার নীতি</a>
            <a className="link link-hover">ব্যবহারের শর্তাবলী </a>
            <a className="link link-hover">যোগাযোগ</a>
            <a className="link link-hover">আমাদের সম্পর্কে</a>
            <a className="link link-hover">আমরা</a>
            <a className="link link-hover">আর্কাইভ</a>
            <a className="link link-hover">বিজ্ঞাপন</a>
        </nav>
        <div className="flex flex-col md:flex-row gap-5">
            <div className="mb-4 md:mb-0">
                <p className="font-xl">
                    হাউজ ২১/এ,লিফট ৫ম তলা, রোড-২, ব্লক-এ, আফতাব নগর, মেরুল বাড্ডা, ঢাকা।
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 font-xl">
                <div className="flex gap-2">
                    <IoIosPhonePortrait className="h-4 w-4" />
                    <p> +২৮৩-৫৬৫৬৫৬</p>
                </div>
                <div className="flex gap-2">
                    <IoCallOutline className="h-4 w-4" />
                    <p> ০১৭০৮-৮৮৮৪৮৮</p>
                </div>
                <div className="flex gap-2">
                    <FaWhatsapp className="h-4 w-4" />
                    <p> ০১৭০৮-৮৮৮৪৮৮</p>
                </div>
                <div className="flex gap-2">
                    <MdOutlineEmail className="h-4 w-4" />
                    <p> universesoftcare@gmail.com</p>
                </div>
            </div>
        </div>
        <nav className="grid grid-flow-col gap-4">
            <div>
                <a><FaInstagramSquare className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaLinkedin className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaGooglePlay className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaYoutube className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaXTwitter className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaFacebookF className="h-6 w-6" /></a>
            </div>
            <div>
                <a><FaWhatsappSquare className="h-6 w-6" /></a>
            </div>
        </nav>
    </footer>
    
    );
};

export default Footer;