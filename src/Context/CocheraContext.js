import { createContext, useState } from "react";

export const CocheraContext = createContext();

export const CocheraProvider = (props) => {
    
    const [cochera, setCochera] = useState([]);
    const [user, setUser] = useState([]);

    const storeCochera = (product) => {
        //hace una copia de lo que ya tiene cochera y agrega el nuevo producto
        // setCochera([...cochera, product]);
        //agrega el elemento al local storage
        localStorage.setItem("cochera",JSON.stringify([...cochera, product]));
    };
    const storeUser = (product)=>{
      localStorage.setItem("user",JSON.stringify([...user, product]));
    }

    return (
        <CocheraContext.Provider
          value={{
            cochera,
            storeCochera,
            user,
            storeUser,
          }}
        >
          {props.children}
        </CocheraContext.Provider>
      );

};

