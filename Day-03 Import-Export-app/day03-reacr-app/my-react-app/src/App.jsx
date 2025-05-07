import DefaultComponent from "./components/DefaultComponent"
import "./App.css"
import { NamedComponentData1, NamedComponentData2 } from "./components/NamedComponentData"
import { Footer, Header } from "./components/CombinedComponent"

function App() {


  return (
    <>
    <Header />
  <DefaultComponent />
  <NamedComponentData1 />
  <NamedComponentData2 />
  <Footer />

    </>
  )
}

export default App
