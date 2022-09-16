import { AppState } from 'store/types/app.types'

export const selectCounter = (state: AppState) => state.counter
export const selectCounterValue = (state: AppState) => state.counter.value
