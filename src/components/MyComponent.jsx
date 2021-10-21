import { useContext } from "react"
import { StoreContext} from "./store/StoreProvider"
import { types } from "./store/StoreReducer"


const MyComponent = () => {
      const [store, storeDispatch] = useContext(StoreContext)
      const {user, products}=store
      return (
            <div>
                  <h1>My Component</h1>
                  <h2>user: {user?.name}</h2>
                  <button onClick={()=> storeDispatch({type: types.authLogout })}>
                        logout
                  </button>
                  <button onClick={()=> storeDispatch({type: types.authLogin, payload:{id:1, name:'luiss'} })}>
                        login
                  </button>

                  <h2>Products</h2>

                  <ul>
                        {
                              products.map((el, i)=>(
                                    <li key={i}>{el.title}</li>
                              ))
                        }
                  </ul>

                  <button onClick={() => storeDispatch({ type: types.productDeleteAll})}>
                        Delete All
                  </button>
                  <button onClick={() => storeDispatch({ type: types.productChange})}>
                        change
                  </button>
            </div>
      )
}

export default MyComponent
