import dataCardsMini from '../api/cards_mini_api';
import dataCardsBig from '../api/cards_big_api';
import news from '../api/news_data';

export const getCardsMini = () => {
    return {
        type: 'GET_CARDS_MINI',
        payload: dataCardsMini
    }
}


export const getCardsBig = () => {
    return {
        type: 'GET_CARDS_BIG',
        payload: dataCardsBig
    }
}


export const getNews = () => {
    return {
        type: 'GET_NEWS',
        payload: news
    }
}