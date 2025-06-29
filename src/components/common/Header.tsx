import { NAV_ITEMS } from "@/utils/constants";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNav, setIsMobileMav] = useState(false);

    useEffect(() => {
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 duration-300 transition-all ${isScrolled ? "bg-white/90 text-black backdrop-blur-lg shadow-lg" : "text-white bg-transparent"}`}>
            <div className="lg:max-w-6xl w-full mx-auto flex items-center justify-between p-4 sm:p-6">
                <div>
                    <h1 className="font-bold text-3xl text-white">RuEdCa</h1>
                </div>

                <nav className="flex items-center justify-center gap-10">
                    {NAV_ITEMS.map((nav) => (
                        <ul
                            key={nav.id}
                            className="capitalize font-medium"
                        >
                            <Link to={nav.to}>{nav.label}</Link>
                        </ul>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
