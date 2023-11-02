import "./App.css"
import { StoreContext } from "storeon/react"
import store from "./store/index"
import React from "react"
import Page from "./pages/index"

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Page />
      </div>
    </StoreContext.Provider>
  )
}

export default App
