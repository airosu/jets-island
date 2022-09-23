import { AnyAction, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { clientsReducer } from 'store/reducers/clients.reducer'
import { counterReducer } from 'store/reducers/counter.reducer'
import { AppState } from 'store/types/app.types'

export const combinedReducer = combineReducers({
    counter: counterReducer,
    clients: clientsReducer,
})

export const masterReducer = (state: AppState, action: AnyAction): ReturnType<typeof combinedReducer> => {
    if (action.type === HYDRATE) {
        return {
            ...state, // existing client side state
            // action.payload => new data that was fetched on the server
            counter: {
                value: state.counter.value + action.payload.counter.value,
            },
            clients: {
                names: [...state.clients.names, ...action.payload.clients.names],
            },
        }
        // const nextState = {
        //     ...state, // use previous state
        //     ...action.payload, // apply delta from hydration
        // }
        // return nextState
    } else {
        return combinedReducer(state, action)
    }
}
