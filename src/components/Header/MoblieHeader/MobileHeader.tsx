import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import menuIcon from "/images/icon-menu.svg";
import closeIcon from "/images/icon-menu-close.svg";
import "./MobileHeader.scss";

type link = {
    title: string;
    href: string;
}

type mobileHeaderHeader = {
    links: link[];
}

export default function MobileHeader({links}: mobileHeaderHeader) {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        initial: {
            scaleX         : 0,
            opacity        : 0,
            transformOrigin: "right",
        },
        animate: {
            scaleX         : 1,
            opacity        : 1,
            transformOrigin: "right",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
        exit   : {
            scaleX         : 0,
            opacity        : 0,
            transformOrigin: "right",
            transition     : {duration: 0.15, ease: "easeInOut"},
        },
    };

    return (
        <nav className="mobile-header">
            <img
                className="mobile-header__menu-icon"
                src={isOpen ? closeIcon : menuIcon}
                alt=''
                onClick={() => setIsOpen(!isOpen)}
                role='presentation'
            />

            <AnimatePresence>
                {isOpen && <div className="mobile-header__modal-background"></div>}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="header-list"
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mobile-header__modal"
                    >
                        <ul className="mobile-header__links">
                            {links.map((link, index) => (
                                <li>
                                    <a className='mobile-header__link' href="#" aria-label={`Go to ${link.title} Page`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
