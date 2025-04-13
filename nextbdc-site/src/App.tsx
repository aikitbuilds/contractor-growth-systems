import { Routes, Route } from 'react-router-dom'
import RoofSalesBootcamp from './pages/RoofSalesBootcamp'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoofSalesBootcamp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
