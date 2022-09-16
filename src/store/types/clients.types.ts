import { ADD_CLIENT } from 'store/constants/clients.constants'

export type Clients = {
    names: string[]
}

export type AddClient = {
    type: typeof ADD_CLIENT
    payload: string
}

export type ClientsAction = AddClient
