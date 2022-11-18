import { IoIosClose, IoIosLogOut } from 'react-icons/io';
import { VscCircleFilled } from 'react-icons/vsc';

function BurguerMenu ({ setBurgerMenuOpen }) {

  return (
    <div>
        <div>
          <button onClick={() => setBurgerMenuOpen(false)}><IoIosClose/></button>
          <div>
            <p>
              <span>💁🏻‍♂️</span>
            </p>
            <p>Estado:<VscCircleFilled /></p>
            <button><IoIosLogOut/>Log out</button>
          </div>
        </div>
    </div>
  )
}

export default BurguerMenu;