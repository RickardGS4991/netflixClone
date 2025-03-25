import React from 'react'
import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';

function HomePage() {
  let user:boolean = false;
  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  )
}

export default HomePage