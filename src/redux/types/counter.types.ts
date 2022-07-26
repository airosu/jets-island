import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from 'redux/constants/counter.constants'

export type CounterState = {
    value: number
}

export type IncrementCounter = {
    type: typeof INCREMENT_COUNTER
    payload: number
}

export type DecrementCounter = {
    type: typeof DECREMENT_COUNTER
    payload: number
}

export type ResetCounter = {
    type: typeof RESET_COUNTER
}

export type CounterAction = IncrementCounter | DecrementCounter | ResetCounter
