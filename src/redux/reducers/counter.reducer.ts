import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER, initialState } from 'redux/constants/counter.constants'
import { CounterState, CounterAction } from 'redux/types/counter.types'

export const counterReducer = (state = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                value: state.value + action.payload,
            }
        case DECREMENT_COUNTER:
            return {
                value: state.value - action.payload,
            }
        case RESET_COUNTER:
            return {
                value: 0,
            }
        default:
            return state
    }
}
