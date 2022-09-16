import { ADD_CLIENT, initialState } from 'store/constants/clients.constants'
import { Clients, ClientsAction } from 'store/types/clients.types'

export const clientsReducer = (state = initialState, action: ClientsAction): Clients => {
    switch (action.type) {
        case ADD_CLIENT:
            return {
                ...state,
                names: [...state.names, action.payload],
            }
        default:
            return state
    }
}
