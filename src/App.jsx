
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nopage from './components/noPage'
import Dashboard from './pages/dashboradPage'

function App() {
  

  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard/>}>
        
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
