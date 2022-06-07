import { createContext, useState } from "react";

export const CocheraContext = createContext();

export const CocheraProvider = (props) => {
    
    const [cochera, setCochera] = useState([]);
    const [user, setUser] = useState([]);
    const [distrito, setDistrito] = useState("");

    const storeCochera = (product) => {
        localStorage.setItem("cochera",JSON.stringify([...cochera, product]));
    };

    const storeReservaCochera = (product) => {
      localStorage.setItem("reservaCochera",JSON.stringify([...cochera, product]));
  };

    const storeUser = (product)=> {
        localStorage.setItem("user",JSON.stringify([...user, product]));
    }

    const storeDistrito = (district) => {
        setDistrito(district);
    }

    return (
        <CocheraContext.Provider
          value={{
            cochera,
            storeCochera,
            user,
            storeUser,
            distrito,
            storeDistrito,
            storeReservaCochera,
          }}
        >
          {props.children}
        </CocheraContext.Provider>
      );

};

