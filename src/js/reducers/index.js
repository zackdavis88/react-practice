import {ADD_ARTICLE, DEL_ARTICLE} from '../constants/action-types';

const initialState = {
  articles: []
};

const rootReducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload]};
    case DEL_ARTICLE:
      const newArticles = state.articles.filter((article)=>{
        if(article.id !== parseInt(action.payload.id))
          return article;
      });
      return {...state, articles: newArticles}
    default:
      return state;
  }
};

export default rootReducer;
