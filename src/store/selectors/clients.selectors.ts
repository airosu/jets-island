import { AppState } from 'store/types/app.types'

export const selectClientNames = (state: AppState) => state.clients.names
