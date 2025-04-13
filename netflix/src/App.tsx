import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './view/HomePage'
import SignUpPage from './view/SignUpPage'
import LoginPage from './view/LoginPage'
import AuthScreen from './view/AuthScreen'
import Footer from './core/components/Footer'
import HomeScreen from './view/HomeScreen'
import WatchPage from './view/WatchPage'

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
