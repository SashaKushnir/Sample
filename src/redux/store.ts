import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMW from 'redux-thunk'

let reducersList = combineReducers({

})
export type RootState = ReturnType<typeof reducersList>

const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)

export default store