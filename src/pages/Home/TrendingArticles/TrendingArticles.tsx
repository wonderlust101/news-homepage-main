import trendingArticlesJson from "/src/data/trendingArticles.json";

import "./TrendingArticles.scss";

const trendingArticles: trendingArticles[] = trendingArticlesJson;


export default function TrendingArticles() {

    return (
        <section className="trending-articles">

            <ul className="trending-articles__articles">
                {trendingArticles.map((trendingArticle, index) => (
                    <li className="trending-articles__article">
                        <img className="trending-articles__img" src={trendingArticle.imageSrc} alt=""/>
                        <article className="trending-articles__article-text">
                            <p className='trending-articles__article-index'>{(index + 1).toString().padStart(2, "0")}</p>
                            <h3 className='trending-articles__article-title'>{trendingArticle.title}</h3>
                            <p>{trendingArticle.preview}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}