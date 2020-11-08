import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reducers} from './reducers'

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 

export const store = createStore(
    reducers,
   
compose(
    
    applyMiddleware(thunk),
    
)
)
