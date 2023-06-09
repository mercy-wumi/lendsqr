import { UserType, User } from "../@types/global";

export type Action =
    | { type: 'get_all_users', payload: User[] }
    | { type: 'get_user', payload: User }
    | { type: 'set_user_id', payload: string }
    | { type: 'set_user_per_page', payload: string }
    | { type: 'set_user_offset', payload: number }
    | { type: 'profile_to_login', payload: boolean };

export const userReducer = (state: UserType, action: Action) => {
    switch (action.type) {
        case 'get_all_users': {
            return {
                ...state,
                users: action.payload
            }
        }
        case 'get_user': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'set_user_id': {
            return {
                ...state,
                userId: action.payload
            }
        }
        case 'set_user_offset': {
            return {
                ...state,
                userOffSet: action.payload
            }
        }
        case 'set_user_per_page': {
            return {
                ...state,
                userPerPage: action.payload
            }
        }
        case 'profile_to_login': {
            return {
                ...state,
                profileLogin: action.payload
            }
        }
        default: {
            return state
        }
    }
}