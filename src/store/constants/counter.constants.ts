import { CounterState } from 'store/types/counter.types'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'

export const initialState: CounterState = {
    value: 0,
}
