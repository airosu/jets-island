import { AppState } from 'redux/types/app.types'

export const selectCounter = (state: AppState) => state.counter
export const selectCounterValue = (state: AppState) => state.counter.value
