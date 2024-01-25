import { ReactElement, FC, FormEvent } from 'react';
import loginImg from '../../assets/images/login.png';
import { useNavigate } from 'react-router-dom';

const Login: FC = (): ReactElement => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    return navigate("/register");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <section className="h-screen w-screen md:flex gap-4 md:w-2/3 justify-center items-center p-3 bg-white">
      <div className="md:shrink-0 md:w-1/3 md:h-1/3">
        <img
          src={loginImg}
          alt="A lady holding a key"
          className="w-full h-full object-cover"
        />
      </div>
      <div className='md:shrink-0 md:w-1/3 md:h-1/3'>
        <form className='flex flex-col justify-between h-full' onSubmit={handleSubmit}>
          <h3 className='md:text-2xl antialiased font-semibold mb-10'>Login</h3>
          <div>
            <label htmlFor="username">Username</label>
            <input  placeholder="username" id="username" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" id="password" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Login</button>
          <button className='text-red-500 py-2 mt-4' onClick={handleNavigate}>Sign up instead</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
