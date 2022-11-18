import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className='register-main'>
      <Link to='/'><button><IoIosArrowBack/></button></Link>
      <h2>Welcome! Let's get<br/>started</h2>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          onChange={}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          onChange={}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Create a password'
          onChange={}
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