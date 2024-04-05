import { createContext, useReducer } from "react";

const INITIAL_STATE={
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room: undefined,
    },
    searchResults: null,
    loading:false,
}
// const INITIAL_STATE = {
//     city: undefined,
//     dates: [], // empty array instead of [{}]
//     options: {
//       adult: 1,
//       children: 0,
//       room: 1,
//     },
//     searchResults: null,
//   };

//export; bec we will use it in diff components
export const SearchContext = createContext(INITIAL_STATE);

//actions
const SearchReducer = (state,action) =>{
    switch(action.type){
        //wehener change search info, dispatch this action
        case "NEW_SEARCH":
                return action.payload
        case "RESET_SEARCH":
                return  INITIAL_STATE 
        case "SET_SEARCH_RESULTS":
                    return { ...state, searchResults: action.payload, loading: false };
        default: return state;
    }
}
 
export const SearchContextProvider = ({children}) =>{
    const [state, dispatch]= useReducer(SearchReducer, INITIAL_STATE);

    return(
        <SearchContext.Provider
        value={{
            //pass to children
             city:state.city,
             dates: state.dates, 
             options: state.options,
             searchResults: state.searchResults,
             dispatch,
             }}
        >
            {children} 
        </SearchContext.Provider>
    )
};
//This code defines a context called SearchContext in React, which is used to share state and functions between different components. The state is managed by a Reducer called SearchReducer.

// The INITIAL_STATE constant defines the initial state of the context, which is an object with the following properties:

// city: undefined
// dates: empty array
// options: an object with the following properties:
// adult: undefined
// children: undefined
// room: undefined

//The SearchReducer function takes the current state and an action as arguments and returns a new state based on the type of the action. It has the following cases:

// "NEW_SEARCH": This case returns the payload of the action, which is the new state of the context.
// "RESET_SEARCH": This case returns the INITIAL_STATE object, which resets the context to its initial state.
// default: This case simply returns the current state.

// The SearchContextProvider component is a provider for the SearchContext. It uses the useReducer hook to create a state and a dispatch function based on the SearchReducer and the INITIAL_STATE. It then provides the state and the dispatch function to the context using the SearchContext.Provider component.

// The SearchContextProvider component takes a children prop, which is the component(s) that will have access to the context.

// In summary, this code defines a context called SearchContext that manages a state using the SearchReducer and provides the state and the dispatch function to the child components through the SearchContextProvider component. The child components can access the state and dispatch actions using the useContext hook.




