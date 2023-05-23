// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'





import React  from "react"
import ReactDOM  from "react-dom"
import NavScrollExample from "./bomponents/Navbar"
import BasicExample from "./bomponents/CardDetals"

const App = () => {
  const data=[
    {title:"title 1" , description:"description 1", srcimg:"/src/imgs/1.png"},
    {title:"title 2" , description:"description 2", srcimg:"/src/imgs/2.png"},
    {title:"title 3" , description:"description 3", srcimg:"/src/imgs/3.png"},
    {title:"title 4" , description:"description 4", srcimg:"/src/imgs/4.png"}
  ]


  const passFunction = (message) => {
    console.log("Castillo" + message)
  }
  return(
    <div>
      <NavScrollExample/>
      {
        data.map((items) => {
          return(
            <BasicExample onClick={passFunction} title={items.title}  description={items.description} srcimg={items.srcimg}> 
            <h2>castillo</h2>
            <p>lorem</p>
            </BasicExample>
          )
        })
      }
      {/* <BasicExample title={Data[0].title} description={Data[0].description} />
      <BasicExample title={Data[1].title} description={Data[1].description} />
      <BasicExample title={Data[2].title} description={Data[2].description} />
      <BasicExample title={Data[3].title} description={Data[3].description} /> */}
    </div>
  )
} 

ReactDOM.render(<App/>, document.getElementById("root"))











      // ReactDOM.createRoot(document.getElementById('root')).render(
      //   <React.StrictMode>
      //     <Test />
      //   </React.StrictMode>,
      // )