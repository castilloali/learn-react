// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'





import React  from "react"
import ReactDOM  from "react-dom"
import Header from "./bomponents/Headers"
import Body from "./bomponents/Bodyy"
import Footer from "./bomponents/Footers"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {

  return (
        <div>

          <Header />
        <BrowserRouter>
          <Routes>
            <Route path="Body"  element={<Body />}/>
            <Route path="Footer"  element={<Footer />}/>
          </Routes>


        </BrowserRouter>
      </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))











      // ReactDOM.createRoot(document.getElementById('root')).render(
      //   <React.StrictMode>
      //     <Test />
      //   </React.StrictMode>,
      // )