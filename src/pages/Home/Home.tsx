import "./Home.scss";
import Header from "../../components/Header";
import Hero from "./Hero/";
import NewArticles from "./NewArticles/";
import TrendingArticles from "./TrendingArticles/";

export default function Home() {

    return (
        <div className="home">
            <Header/>

            <main className="grid-bleed">
                <div className='home__content'>
                    <Hero/>
                    <NewArticles/>
                    <TrendingArticles/>
                </div>
            </main>
        </div>
    );
}