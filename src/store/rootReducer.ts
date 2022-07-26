import { combineReducers } from 'redux'
import { counterReducer } from 'store/reducers/counter.reducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
})
