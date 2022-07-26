import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/hooks/useAppDispatch'
import { selectCounterValue } from 'redux/selectors/counter.selectors'
import {
    incrementCounter as incrementCounterAction,
    decrementCounter as decrementCounterAction,
    resetCounter as resetCounterAction,
} from 'redux/actions/counter.actions'

export const useCounter = () => {
    const dispatch = useAppDispatch()

    const counterValue = useSelector(selectCounterValue)
    const incrementCounter = (amount: number) => dispatch(incrementCounterAction(amount))
    const decrementCounter = (amount: number) => dispatch(decrementCounterAction(amount))
    const resetCounter = () => dispatch(resetCounterAction())

    return { counterValue, incrementCounter, decrementCounter, resetCounter }
}
