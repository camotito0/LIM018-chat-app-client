import axios from 'axios';
import { useState } from "react";
import {IoIosClose} from "react-icons/io";
import '../components.css';

function CreateChat({setOpenModal, user_id}) {
  const userData = JSON.parse(sessionStorage.user);
  console.log(userData);
  const createChatFetch = () => {
    axios.post('http://localhost:5000/channel', { 
      body: values,
      headers: {'Authorization': `Bearer ${userData[0].token}`}})
    .then((resp) => {
      console.log(resp.data)
      return resp.data
    })
    .catch((err) => console.log(err))
  }

  const [values, setValues] = useState({name: '', user_id: user_id});

  const handleInputChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const createChat = async (e) => {
    e.preventDefault()
    const res = await createChatFetch();
    console.log(res);
  }

  return (
    <div className="create-chat__background" >
      <div className="create-chat__div">
        <button
          className="create-chat__close-button"
          onClick={() => setOpenModal(false)}
        >
          <IoIosClose/>
        </button>
        <h2>Create new chat</h2>
        <form className="create-chat__form" onSubmit={createChat}>
          <input 
            type='text'
            name="name"
            placeholder="Enter a name"
            required
            onChange={handleInputChange}
          />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateChat;