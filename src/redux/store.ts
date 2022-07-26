import { legacy_createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from 'redux/rootReducer'
import { AppState, AppAction } from 'redux/types/app.types'

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)),
)
