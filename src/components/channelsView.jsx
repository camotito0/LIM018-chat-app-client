import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosSearch, IoMdMore } from "react-icons/io";
import { IoMenu } from  "react-icons/io5";
import CreateChat from './modalCreateChat';
import BurguerMenu from './burguerMenu';
import '../components.css';

function Channels() {
  const [modalOpen, setModal] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [data, setData] = useState([]);
  const userData = JSON.parse(sessionStorage.user);
  
  const fetchUsers = () => {
    fetch('http://localhost:5000/channelsByUser', {
        method:'GET',
        headers: {'Authorization': `Bearer ${userData[0].token}`}
    })
    .then((resp) => resp.json())
    .then((fetchedData) => {
      setData(fetchedData.channels)
    })
  }
  
  useEffect(() => { fetchUsers() })

  const filteredData = data.filter((item) => item.username === userData[0].username)

  return (
    <main className='channels-main'>
      <div className='channels-header'>
        <h2>Channels</h2>
        <button onClick={() => {setBurgerOpen(true)}} >
          <IoMenu/>
        </button>
      </div>
      <div className='channels-search'>
        <IoIosSearch />
        <input type='text' placeholder='Search'/>
      </div>
      <section className='channels-chats'>
          <button className='channels-chat__button'>
            <Link to='0' state={{item:{name:'Chat general'}}}>
              <p>Chat General</p>
            </Link>
            <IoMdMore />
          </button>
        {filteredData.length > 0 ? filteredData.map(item => {
          return  <button className='channels-chat__button' key={item.id}>
                    <Link to={`${item.id}`} state={{item:item}}>
                      <p>{item.name}</p>
                    </Link>
                    <IoMdMore />
                  </button>
        }):''}
      </section>
      <button
        className='channels-create-button'
        onClick={() => {setModal(true)}}
      >
        create New chat
      </button>
      {burgerOpen&& <BurguerMenu setBurgerOpen={setBurgerOpen}/>}
      {modalOpen && <CreateChat setModal={setModal} />}
      <Outlet />
    </main>
  );
}

export default Channels;