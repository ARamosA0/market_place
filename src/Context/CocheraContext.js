import { createContext, useState } from "react";

export const CocheraContext = createContext();

export const CocheraProvider = (props) => {
    
    const [cochera, setCochera] = useState([]);

    const storeCochera = (product) => {
        //hace una copia de lo que ya tiene cochera y agrega el nuevo producto
        // setCochera([...cochera, product]);
        //agrega el elemento al local storage
        localStorage.setItem("cochera",JSON.stringify([...cochera, product]));
    };

    return (
        <CocheraContext.Provider
          value={{
            cochera,
            storeCochera,
          }}
        >
          {props.children}
        </CocheraContext.Provider>
      );

};

