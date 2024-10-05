import logo from "/images/logo.svg";

import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MoblieHeader";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./Header.scss";

const links: link[] = [
    {
        "title": "Home",
        "href" : "#"
    },
    {
        "title": "New",
        "href" : "#"
    },
    {
        "title": "Popular",
        "href" : "#"
    },
    {
        "title": "Trending",
        "href" : "#"
    },
    {
        "title": "Categories",
        "href" : "#"
    }
];

export default function Header() {
    const {width} = useWindowDimensions();
    
    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={logo} alt="W Logo"/>

                {width >= 768 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader links={links}></MobileHeader>
                )}
            </div>
        </header>
    );
}