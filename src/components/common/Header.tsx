import { NAV_ITEMS } from "@/utils/constants";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { motion } from "motion/react";
import {Menu, X} from "lucide-react";

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
        <motion.header className={`fixed top-0 left-0 right-0 z-50 duration-300 transition-all ${isScrolled ? "bg-white/90 text-black backdrop-blur-lg shadow-lg" : "text-white bg-transparent"}`}>
            <div className="lg:max-w-6xl w-full mx-auto flex items-center justify-between p-4 sm:p-6">
                <Link to="/"
                      className="font-extrabold text-2xl tracking-tight">
                    RuEdCa
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-baseline gap-8 font-medium capitalize">
                        {NAV_ITEMS.map((nav) => (
                            <li key={nav.id}>
                                <Link
                                    to={nav.to}
                                    className="transition-colors hover:text-primary"
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMav(!isMobileNav)}
                        className={`p-2 rounded-md transition-colors duration-300 ${
                            isScrolled
                                ? 'text-gray-700 hover:text-ruhuna-blue'
                                : 'text-white hover:text-gray-200'
                        }`}
                    >
                        {isMobileNav ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>
                {/* Mobile Navigation */}
                {isMobileNav && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="lg:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg h-64 flex flex-col items-center justify-center mt-2 shadow-lg">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="text-gray-700 capitalize hover:text-ruhuna-blue hover:bg-light-neutral block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                                    onClick={() => setIsMobileMav(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
        </motion.header>
    );
};

export default Header;
