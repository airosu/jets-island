import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from 'store/types/app.types'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
