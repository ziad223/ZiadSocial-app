import { createContext, useEffect, useState } from "react";

export const DarkContext = createContext();

const DarkProvider = (props) =>{
    
    const [dark , setDark] = useState(
       JSON.parse( localStorage.getItem("dark"))
    );

    useEffect(() =>{
        localStorage.setItem("dark" , dark)
    } , [dark])

    const darkMode = () =>{
        setDark(!dark)
    }

    return (
      <DarkContext.Provider value={{dark , darkMode}}>
        {props.children}
      </DarkContext.Provider>
    )
}

export default DarkProvider;