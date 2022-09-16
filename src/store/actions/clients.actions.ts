import { ADD_CLIENT } from 'store/constants/clients.constants'
import { AddClient } from 'store/types/clients.types'

export const addClient = (client: string): AddClient => ({
    type: ADD_CLIENT,
    payload: client,
})
