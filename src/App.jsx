import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Footer, Header, Main, Nav } from "./components"
import { routesData } from "./utils"

function App() {

  const routes = routesData.map((route, index)=> <Route key={index} {...route}/>)

  return (
    <Router>
      <Header/>
      {/* <Nav/> */}
      <Main>
        <Routes>
          {routes}
        </Routes>
      </Main>
      <Footer/>
    </Router>
  )

}

export default App
