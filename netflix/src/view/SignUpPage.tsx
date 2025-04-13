import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuthViewModel } from '../core/hooks/useAuthViewModel.hook';

function SignUpPage() {
  let authHook = useAuthViewModel();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email === null || username === null || password === null){
      return;
    }

    let request = {
      data: {
        email: email,
        password: password
      },
      username: username
    }

    try {
      await authHook.register(request);
      toast.success('Usuario registrado')
    } catch (error) {
      toast.error('Algo sucedio mal...');
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
              <input type='email' value={email} className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@example.com' id='email' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>
                Username
              </label>
              <input type='text' value={username} className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@example.com' id='username' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
            </div>

            <div>
              <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>
                Password
              </label>
              <input type='password' value={password} className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring' placeholder='you@example.com' id='password' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            </div>

            <button className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700'>Sign up</button>
           </form>

           <div className='text-center text-gray-400'>
            Already a member?{" "}
            <Link to={"/login"} className='text-red-500 hover:underline'>Sign in</Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
