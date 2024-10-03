import logo from "/images/logo.svg";

import "./Header.scss";

type link = {
    title: string;
    href: string;
}

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

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={logo} alt="W Logo"/>

                <nav>
                    <ul className="header__links">
                        {links.map((link) => (
                            <li key={link.title}>
                                <a className="header__link" href={link.href} aria-label={`Go to ${link.title} page`}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}