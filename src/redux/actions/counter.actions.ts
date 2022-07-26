import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from 'redux/constants/counter.constants'
import { IncrementCounter, DecrementCounter, ResetCounter } from 'redux/types/counter.types'

export const incrementCounter = (amount: number): IncrementCounter => ({
    type: INCREMENT_COUNTER,
    payload: amount,
})

export const decrementCounter = (amount: number): DecrementCounter => ({
    type: DECREMENT_COUNTER,
    payload: amount,
})

export const resetCounter = (): ResetCounter => ({
    type: RESET_COUNTER,
})
