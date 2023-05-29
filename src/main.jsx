// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'





import React  from "react"
import ReactDOM  from "react-dom"
import Status from "./bomponents/Status"
// import { BrowserRouter, Route, Routes } from "react-router-dom"



const App = () => {
  return (
        <div>
          <Status/>
      </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))











      // ReactDOM.createRoot(document.getElementById('root')).render(
      //   <React.StrictMode>
      //     <Test />
      //   </React.StrictMode>,
      // )