declare global {
    
    type newArticle = {
        title: string;
        preview: string;
    }

    type trendingArticles = {
        title: string;
        preview: string;
        imageSrc: string;
    }

    type link = {
        title: string;
        href: string;
    }
}

export {};