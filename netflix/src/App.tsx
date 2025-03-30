import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './viewModel/HomePage'
import SignUpPage from './viewModel/SignUpPage'
import LoginPage from './viewModel/LoginPage'
import AuthScreen from './viewModel/AuthScreen'
import Footer from './core/components/Footer'
import HomeScreen from './viewModel/HomeScreen'
import WatchPage from './viewModel/WatchPage'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/home' element={<HomeScreen />}/>
      <Route path='/signup'  element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} /> 
      <Route path='/auth' element={<AuthScreen />} />
      {/* <Route path='/watch:id' element={user ? <WatchPage /> : <Navidate to={"/"} />} /> */}
      <Route path='/watch' element={<WatchPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
