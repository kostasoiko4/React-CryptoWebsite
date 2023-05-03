import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

import coinReducer from "./reducers/coinReducer"

const initialState = {};

const reducer = combineReducers({
    coinReducer
})

const middleware = [ thunk ]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;