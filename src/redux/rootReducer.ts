import { combineReducers } from 'redux'
import { counterReducer } from 'redux/reducers/counter.reducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
})
