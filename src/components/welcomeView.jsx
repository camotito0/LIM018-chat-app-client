import { Link } from 'react-router-dom';
import '../components.css';

function Welcome() {
	return (
		<main className='welcome-main'>
			<img src='../img.svg' alt='welcome-img'/>
			<div className='welcome-buttons' >
					<button><Link to='/login'>Login</Link></button>
					<button><Link to='/signup'>Register</Link></button>
			</div>
		</main>
	);
}

export default Welcome;