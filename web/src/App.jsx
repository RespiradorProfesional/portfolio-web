import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/layout/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      {/* Aquí puedes agregar más componentes o contenido */}
    </div>
  )
}

export default App