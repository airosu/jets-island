import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from 'redux/types/app.types'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
