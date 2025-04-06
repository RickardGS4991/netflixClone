import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginService } from '../services/login';
import { setItems } from '../core/utils/localStorage';
import { Tokens } from '../model/tokens';
import { toast } from 'sonner';
import { setAuth } from '../core/store/authContent';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const {changeAuth} = setAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!email || !password){
      return;
    }

    try {
      let result = await LoginService({email: email, password: password});
      console.log(result);
      if(!result){
        throw new Error(`Invalid credentials`);
      }
      let tokens: Tokens = { access: result.accessToken, refresh: result.refreshToken }
      changeAuth({ username: result.username, image_path: result.imagePath });
      setItems(tokens);
      toast.success(`Bienvenido, ${result.username}`);
      navigate('/home');
    } catch (error) {
      toast.error('Algo sucedió mal...');
    }
  }
  
  return (
    <div className='h-screen w-full hero-bg'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
          <img src='/netflix-logo.png' alt='logo' className='w-52'/>
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
           <h1 className='text-center text-white text-2xl font-bold m-4'>Sign up</h1>
           <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>
                Email
              </label>
              <input type='email' name='email' value={email} className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@example.com' id='email' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>
                Password
              </label>
              <input type='password' name='password' value={password} className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@example.com' id='password' onChange={(e:any) => setPassword(e.target.value)}/>
            </div>

            <button className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>Sign up</button>
           </form>

           <div className='text-center text-gray-400'>
            Do not have an account?{" "}
            <Link to={"/signup"} className='text-red-500 hover:underline'>Sign up</Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
