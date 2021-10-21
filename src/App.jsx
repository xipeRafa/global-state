
import MyComponent from './components/MyComponent';
import StoreProvider from './components/store/StoreProvider';


function App() {

  return (
    <div className="App">
      <StoreProvider>
        <MyComponent />
      </StoreProvider>
    </div>
  )
}

export default App
