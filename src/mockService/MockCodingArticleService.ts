import { asyncUtil } from "../utils/utils";

export interface CodingArticle {
    title:string
    content:string
    date:string
    author:string
}

const mockCodingArticleData :CodingArticle[]=[

    {
        title:'css',
        content:'affffffffffafaa',
        date:'2022.0721',
        author:'gzh720'
    },
    {
        title:'html',
        content:'fafasfasfasfwascf',
        date:'2022.0721',
        author:'gzh720'
    },
    {
        title:'js',
        content:'kfjffhv',
        date:'2022.0721',
        author:'gzh720'
    },
    {
        title:'ts',
        content:'mgmhmhkm',
        date:'2022.0721',
        author:'gzh720'
    },
    {
        title:'java',
        content:'affffffffffafaa',
        date:'2022.0721',
        author:'gzh720'
    },
];

export const getCodingArticleApi = asyncUtil(mockCodingArticleData,2000)