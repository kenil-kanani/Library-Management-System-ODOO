import { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import AppContext from './context/AppContext'
import { Toaster } from './components/ui/toaster'
import { FirstLoading, NavBar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Admin, Books, Librarian } from './pages'

function App() {
  const { isLoading } = useContext(AppContext)

  return (
    isLoading ? <FirstLoading /> : (
      <>
        <Toaster />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/librarian" element={<Librarian />} />
        </Routes>
      </>
    )
  )
}

export default App
