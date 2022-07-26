import { Dispatch } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { rootReducer } from 'redux/rootReducer'
import { CounterAction } from 'redux/types/counter.types'

export type AppState = ReturnType<typeof rootReducer>
export type GetAppState = () => AppState

export type AppAction = CounterAction

export type AppDispatch = Dispatch<AppAction>

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AppAction>
export type AppThunkDispatch = ThunkDispatch<AppState, undefined, AppAction>
