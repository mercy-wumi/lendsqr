import { UserType } from "../@types/global";

export const userReducer = (state: UserType, action: { type: string; payload: any }) => {
    switch (action.type) {
        case 'get_user': {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state
        }
    }
}