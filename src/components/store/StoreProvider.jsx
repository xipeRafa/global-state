import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext()

const StoreProvider = ({children}) =>{

      const[store, storeDispatch]=useReducer(storeReducer, initialStore)

      return(
            <StoreContext.Provider value={[store, storeDispatch]}> 
                  {children}
            </StoreContext.Provider>
      )
}

export {StoreContext} //imported in MyComponent to use: [store, storeDispatch] 
export default StoreProvider //import in App.js