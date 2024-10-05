import {useState} from "react";
import "./FullSizeHeader.scss";

type link = {
    title: string;
    href: string;
}

type fullSizeHeader = {
    links: link[];
}

export default function FullSizeHeader({links}: fullSizeHeader) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleDropdownToggle = (header: string) => {
        setOpenDropdown((prev) => (prev === header ? null : header));
    };

    return (
        <nav className="full-sized-header">
            <ul className="full-sized-header__links">
                {links.map((link) => (
                    <li key={link.title}>
                        <a className="full-sized-header__link" href={link.href} aria-label={`Go to ${link.title} page`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}