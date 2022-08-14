import {asyncUtil} from "../utils/utils";

export interface CodingArticle {
    title: string;
    content: string;
    date: string;
    tag: string[];
}

const mockCodingArticleData: CodingArticle[] = [

    {
        title: 'css',
        content: 'affffffffffafaa',
        date: '2022.0721',
        tag: ['front_end', 'css'],
    },
    {
        title: 'html',
        content: 'fafasfasfasfwascf',
        date: '2022.0721',
        tag: ['front', 'html']
    },
    {
        title: 'js',
        content: 'kfjffhv',
        date: '2022.0721',
        tag: ['front', 'js'],
    },
    {
        title: 'ts',
        content: 'mgmhmhkm',
        date: '2022.0721',
        tag: ['front', 'ts'],
    },
    {
        title: 'java',
        content: 'affffffffffafaa',
        date: '2022.0721',
        tag: ['back_end', 'java']
    },
];

export const getCodingArticleApi = asyncUtil(mockCodingArticleData, 2000)