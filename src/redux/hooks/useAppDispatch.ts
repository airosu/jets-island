import { useDispatch } from 'react-redux'
import { AppDispatch } from 'redux/types/app.types'

export const useAppDispatch: () => AppDispatch = useDispatch
