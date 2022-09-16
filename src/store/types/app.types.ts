import { Dispatch } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { combinedReducer } from 'store/masterReducer'
import { ClientsAction } from 'store/types/clients.types'
import { CounterAction } from 'store/types/counter.types'

export type AppState = ReturnType<typeof combinedReducer>
export type GetAppState = () => AppState

export type AppAction = CounterAction | ClientsAction

export type AppDispatch = Dispatch<AppAction>

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AppAction>
export type AppThunkDispatch = ThunkDispatch<AppState, undefined, AppAction>
