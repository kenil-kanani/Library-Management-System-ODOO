import { useContext } from 'react'
import './App.css'
import Home from './pages/Home'
import AppContext from './context/AppContext'
import { Toaster } from './components/ui/toaster'
import { FirstLoading, NavBar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Admin, BookDetails, Books, Librarian, SignIn, SignUp } from './pages'

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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </>
    )
  )
}

export default App
