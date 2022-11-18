import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function Register() {
  const [values, setValues] = useState(({
    username:'',
    email:'',
    password:''
  }))

  const handleInputChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const fetchAPI = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-Type': 'application/json'}
      });
      const data = await fetchAPI.json();
      if(data.message === 'user added') {
        navigate('channels')
        return data
      } else return data
    } catch (e) {
      return e
    }
  }

  const sendData = async (e) => {
    e.preventDefault();
    const res = await registerUser();
    sessionStorage.setItem('user', JSON.stringify(res.user))
    e.target.reset();
  }

  return (
    <main className='register-main'>
      <Link to='/'><button><IoIosArrowBack/></button></Link>
      <h2>Welcome! Let's get<br/>started</h2>
      <form onSubmit={sendData}>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          onChange={handleInputChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          onChange={handleInputChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Create a password'
          onChange={handleInputChange}
          required
        />
        <button>Agree and Register</button>
      </form>
      <div>
        <p>Do you have an account?</p>
        <Link to='/login'>Login</Link>
      </div>
    </main>
  )
}

export default Register;