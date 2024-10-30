import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Services from './Component/Services'
import Transactions from './Component/Transactions'
import Welcome from './Component/Welcome'

const App = ()=>{
  return(
    <div className='min-h-screen'>
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
      
    </div>
  )

}
  

export default App
