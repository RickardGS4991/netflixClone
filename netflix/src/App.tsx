import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './viewModel/HomePage'
import SignUpPage from './viewModel/SignUpPage'
import LoginPage from './viewModel/LoginPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/signup'  element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} /> 
    </Routes>
  )
}

export default App
