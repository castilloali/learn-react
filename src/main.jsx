// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'





import React  from "react"
import ReactDOM  from "react-dom"
import NavScrollExample from "./bomponents/Navbar"
import BasicExample from "./bomponents/CardDetals"
import NotFound from "./bomponents/NotFound"
import Form from "./bomponents/Form"

const App = () => {
  const data=[
    // {title:"title 1" , description:"description 1", srcimg:"/src/imgs/1.png"},
    // {title:"title 2" , description:"description 2", srcimg:"/src/imgs/2.png"},
    // {title:"title 3" , description:"description 3", srcimg:"/src/imgs/3.png"},
    // {title:"title 4" , description:"description 4", srcimg:"/src/imgs/4.png"}
  ]


  const passFunction = (message) => {
    console.log("Castillo" + message)
  }


  const handelInput = (e) => {
    console.log(e.target.value)
  }
  return(
    <div>
      <NavScrollExample/>
      <Form/>
      {

        data.length ? (

          data.map((items) => {
            return(
              <BasicExample onClick={passFunction} title={items.title}  description={items.description} srcimg={items.srcimg}> 
              <h2>castillo</h2>
              <p>lorem</p>

              </BasicExample>
          )
          })


        ) : (

          <NotFound message={"no tada found"} color="info"/>
          
        )



      }
    </div>
  )
} 

ReactDOM.render(<App/>, document.getElementById("root"))











      // ReactDOM.createRoot(document.getElementById('root')).render(
      //   <React.StrictMode>
      //     <Test />
      //   </React.StrictMode>,
      // )