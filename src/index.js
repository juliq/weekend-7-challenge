import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const answer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return { ...state, feeling: action.payload };
        case "ADD_UNDERSTANDING":
            return { ...state, understanding: action.payload };
        case "ADD_SUPPORT":
            return { ...state, support: action.payload };
        case "ADD_COMMENTS":
            return { ...state, comment: action.payload };
        default:
            return state;
    }
}

const feedback = (state = [], action) => {
    switch (action.type) {
        case "GET_FEEDBACK":
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}

const allReducers = combineReducers({
    answer,
    feedback,
})

const storeInstance = createStore(
    allReducers,
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
