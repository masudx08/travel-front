
import { useContext, useEffect } from "react"
import { MyContext } from "../App"
import Filter from "../components/Filter/Filter"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Result from "../components/Result/Result"


function Home(){
  const Context = useContext(MyContext)
  console.log(Context, 'context')
  
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