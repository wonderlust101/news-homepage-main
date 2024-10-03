import heroImageMobile from "/images/image-web-3-mobile.jpg";
import heroImageDesktop from "/images/image-web-3-desktop.jpg";

import "./Hero.scss";
import Button from "../../../components/Button";

export default function Hero() {

    return (
        <section className="hero">
            <picture className="hero__image">
                <source srcSet={heroImageDesktop} media="(min-width: 60rem)"/>
                <img src={heroImageMobile} alt="" role="presentation"/>
            </picture>

            <article className="hero__featured">
                <h1 className='hero__header'>The Bright Future of Web 3.0?</h1>

                <p className='hero__body'>
                    We dive into the next evolution of the web that claims to put the power of the platforms back
                    into the hands of the people. But is it really fulfilling its promise?
                </p>
                
                <Button variant="button--orange hero__button">Read More</Button>
            </article>
        </section>
    );
}