import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE={
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
}
//export; bec we will use it in diff components
export const AuthContext = createContext(INITIAL_STATE);

//actions
const AuthReducer = (state,action) =>{
    switch(action.type){
        //wehener change search info, dispatch this action
        case "LOGIN_START":
                return{
                    user: null,
                    loading: true,
                    error: null,
                };
        case "LOGIN_SUCCESS":
                return{
                        user: action.payload,
                        loading: false,
                        error: null,
                    };
        case "LOGIN_FAILURE":
                return{
                    user: null,
                    loading: false,
                    error: action.payload,
                };
        case "LOGOUT":
                return{
                        user: null,
                        loading: false,
                        error: null,
                    };
       
        default: return state;
    }
};

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch]= useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        //local storage
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user]);
    //user dependency; whenever user changes; update local storage
    return(
        <AuthContext.Provider
        value={{
            //pass to children
             user: state.user,
             loading: state.loading,
             error: state.error,
             dispatch,
             }}
        >
            {children} 
        </AuthContext.Provider>
    );
};