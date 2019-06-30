import { combineReducers } from 'redux';

import card_mini_reducer from './card_mini_reducer';
import card_big_reducer from './card_big_reducer';
import news_reducer from './news_reducer';
import contacts_reducer from './contacts_reducer';

export default combineReducers({
    card_mini_reducer, card_big_reducer, news_reducer, contacts_reducer
})