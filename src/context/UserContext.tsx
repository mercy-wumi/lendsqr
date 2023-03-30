import { createContext, useReducer } from "react";
import { UserType, Props } from "../@types/global";
import { userReducer } from "../reducers/userReducer";

const initialState = {
    users: [],
    user: '',
    profileLogin: ''
}
export const UserContext = createContext<{
    state: UserType;
    dispatch: React.Dispatch<any>;
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
