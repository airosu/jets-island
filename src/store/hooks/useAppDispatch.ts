import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/types/app.types'

export const useAppDispatch: () => AppDispatch = useDispatch
