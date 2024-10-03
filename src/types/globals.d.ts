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
}

export {};