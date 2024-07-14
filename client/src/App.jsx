import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { Toaster } from './components/ui/toaster'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <SignUp/>
    </>
  )
}

export default App
