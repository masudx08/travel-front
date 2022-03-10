
import { useContext, useEffect } from "react"
import { MyContext } from "../App"
import Filter from "../components/Filter/Filter"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Result from "../components/Result/Result"


function Home(){
  return (
    <div>
      <Header />
      <Filter />
      <Result />
      <Footer />
    </div>
  )
}

export default Home