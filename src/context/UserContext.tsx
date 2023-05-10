import { createContext, useReducer } from "react";
import { UserType, Props, User } from "../@types/global";
import { userReducer, Action } from "../reducers/userReducer";

const initialState = {
    users: [],
    user: {} as User,
    userId: '',
    profileLogin: ''
}
export const UserContext = createContext<{
    state: UserType;
    dispatch: React.Dispatch<Action>;
}>(
    {
        state: initialState,
        dispatch: () => null
    }
)

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
