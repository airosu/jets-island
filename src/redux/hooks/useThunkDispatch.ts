import { useDispatch } from 'react-redux'
import { AppThunkDispatch } from 'redux/types/app.types'

export const useThunkDispatch: () => AppThunkDispatch = useDispatch
