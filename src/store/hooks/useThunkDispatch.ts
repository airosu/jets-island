import { useDispatch } from 'react-redux'
import { AppThunkDispatch } from 'store/types/app.types'

export const useThunkDispatch: () => AppThunkDispatch = useDispatch
