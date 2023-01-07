import { createContext, useContext, useState } from "react";


const AppContext = createContext(); //this is the context

export default function AppWraper({children}) {
    //make the context provider= the function that will provide all your components with global states
//1.- Create a useState hook for your global state 
//2.- return the context.provider with the value as the state and its respective functions 


const [compKeyword, setcompKeyword]=useState("");//compKeyword short for company keyword

  return (
    <AppContext.Provider value={{
        compKeyword,
        setcompKeyword,
    }}>
        {children}
    </AppContext.Provider>
  )
}

//3.- Tell next I have added a context and wrap the components with the provider

export function useAppContext(){
  return useContext(AppContext);
}