import { IoIosClose, IoIosLogOut } from 'react-icons/io';
import { VscCircleFilled } from 'react-icons/vsc';

function BurguerMenu ({ setBurgerOpen }) {
  const userData = JSON.parse(sessionStorage.user);

  return (
    <div className='burger-background'>
        <div className='burger-container'>
          <button onClick={() => setBurgerOpen(false)}><IoIosClose/></button>
          <div className='burger-user__info'>
            <p>
              <span>💁🏻‍♂️</span>
              {userData[0].username}
            </p>
            <p className='burger-user__info-status' >Status:<VscCircleFilled /> Online</p>
            <button><IoIosLogOut/>Log out</button>
          </div>
        </div>
    </div>
  )
}

export default BurguerMenu;