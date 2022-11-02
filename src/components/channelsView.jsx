/* eslint-disable */
import { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosSearch } from  "react-icons/io";
import { IoMenu } from  "react-icons/io5";
import CreateChat from './modalCreateChat';

function Channels() {
  const [modalOpen, setModalOpen] = useState(false);
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
  
  useEffect(() => { fetchUsers() },[])
  
  useEffect(() => {
  }, [data, modalOpen])
  
  const filteredData = data.filter((item) => item.username === userData[0].username)
  return (
    <main className='channels-main'>
      <div className='channels-header'>
        <h2>Channels</h2>
        <button>
          <IoMenu/>
        </button>
      </div>
      <div className='channels-search'>
        <IoIosSearch />
        <input type='text' placeholder='Search'/>
      </div>
      <section className='channels-chats'>
        {filteredData.length > 0 ? filteredData.map(item => {
          return <>
          <button className='channels-chat__button' key={item.id}>
            <p>{item.name}</p>
            <IoIosArrowForward />
          </button>
        </>
        }): <p>Chat general</p>}
      </section>
      <button
        className='channels-create-button'
        onClick={() => {setModalOpen(true)}}
      >
        create New chat
      </button>
      {modalOpen && <CreateChat setOpenModal={setModalOpen} user_id={userData[0].id} />}
    </main>
  );
}

export default Channels;