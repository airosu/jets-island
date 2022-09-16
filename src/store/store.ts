import { legacy_createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { masterReducer } from 'store/masterReducer'
import { AppState, AppAction } from 'store/types/app.types'
import { createWrapper } from 'next-redux-wrapper'

// process.env.NODE_ENV
// development
// production

// TODO: resolve type matching issue in create store
// FROM: '(state: AppState, action: AnyAction) => ReturnType<typeof combinedReducer>'
// TO: 'Reducer<CombinedState<{ counter: CounterState; clients: Clients; }>, AnyAction>'

export const initStore = () => {
    return legacy_createStore(
        // @ts-ignore TODO: fix this
        masterReducer,
        composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)),
    )
}

export const wrapper = createWrapper(initStore)
