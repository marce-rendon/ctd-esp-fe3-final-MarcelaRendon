import { createContext, useReducer, useMemo, useEffect  } from "react";
import axios from "axios";


export const initialState = {
  theme: "light", 
  data: [],
};

const reducer= (state, action) => {
  switch (action.type) {
    case "HANDLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light"}; 
      case "SET_DATA":
        return {...state, data: action.payload};
      default:
        return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer (reducer, initialState);

  useEffect (()=> {
    const fetchData = async () => {
    try {
      const response = await axios.get ("https://jsonplaceholder.typicode.com/users"); 
      dispatch ({type: "SET_DATA", payload: response.data});
    } catch (error) {
      console.error ("Error fetching data:", error);
    }
  }; 

  fetchData (); 
}, []);

  const value = useMemo (() => ({state, dispatch}), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
