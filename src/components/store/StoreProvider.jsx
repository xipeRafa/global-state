import { createContext, useContext, useReducer } from "react";
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

const useStore = () => useContext(StoreContext)[0]
const useStoreDispatch = () => useContext(StoreContext)[1]

export {StoreContext} //imported in MyComponent to use: [store, storeDispatch] 
export {useStore, useStoreDispatch} //imported in MyComponent, const { user, products } = useStore();
export default StoreProvider //import in App.js