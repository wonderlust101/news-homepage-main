import newArticlesJson from "/src/data/newArticles.json";

import "./NewArticles.scss";

const newArticles: newArticle[] = newArticlesJson;

export default function NewArticles() {

    return (
        <section className="new-articles">
            <h2 className="new-articles__header">New</h2>

            <ul className="new-articles__articles">
                {newArticles.map((newArticle, index) => (
                    <li className="new-articles__article">
                        <article className="new-articles__article-text">
                            <h3>{newArticle.title}</h3>
                            <p className="new-articles__article-preview">{newArticle.preview}</p>
                        </article>

                        {index !== newArticles.length - 1 ? <hr/> : null}
                    </li>
                ))}
            </ul>
        </section>
    );
}