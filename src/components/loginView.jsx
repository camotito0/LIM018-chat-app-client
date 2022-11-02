import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from  "react-icons/io";
import { useState } from 'react';
import '../components.css';

function Login() {
  const navigate = useNavigate();
  const loginFetch = async () => {
    try {
      const fetchApi = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-Type': 'application/json'}
      });
      const data = await fetchApi.json();
      if(data.message === 'user logged') {
        navigate('/channels')
        return data
      } else return data
    } catch(err) {
      return err.message
    }
  }

  const [values, setValues] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const sendData = async (e) => {
    e.preventDefault()
    const res = await loginFetch();
    sessionStorage.setItem('user', JSON.stringify(res.user))
    e.target.reset();
  }

  return (
    <main className='login-main'>
      <button><Link to='/'><IoIosArrowBack/></Link></button>
      <h2>Welcome back! Glad <br/> to see you, Again!</h2>
        <form className='login-form' onSubmit={sendData} >
          <input 
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            onChange={handleInputChange}
          />
          <input 
            type='password'
            name='password'
            placeholder='Enter your password'
            required
            onChange={handleInputChange}
          />
          <button>Login</button>
        </form>
        <div className='login-redirect'>
          <p>Don't you have an account</p>
          <Link to='/register'>Register</Link>
        </div>
    </main>
  );
}

export default Login;