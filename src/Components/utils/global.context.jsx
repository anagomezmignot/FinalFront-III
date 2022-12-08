
  import { createContext, useMemo, useReducer } from "react";
  import { actions, initialState, reducer } from "./reducer.service";


// export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext(undefined);

const ContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  
    const providerState = useMemo(
      () => ({
        theme: state.theme,
        setDarkTheme: () => {
          dispatch({ type: actions.SET_THEME_DARK });
        },
        setLightTheme: () => {
          dispatch({ type: actions.SET_THEME_LIGHT });}
        }))
  
    return (
      <ContextGlobal.Provider value={providerState}>
        {children}
      </ContextGlobal.Provider>
    );
};

export default ContextProvider;