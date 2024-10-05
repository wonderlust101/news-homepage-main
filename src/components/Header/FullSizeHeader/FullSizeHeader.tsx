import {useState} from "react";
import "./FullSizeHeader.scss";

type fullSizeHeader = {
    links: link[];
}

export default function FullSizeHeader({links}: fullSizeHeader) {
    
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