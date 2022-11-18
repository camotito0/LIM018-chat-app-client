import { useState } from "react";
import {IoIosClose} from "react-icons/io";
import '../components.css';

function CreateChat({setOpenModal}) {
  const [values, setValues] = useState({name: '', user_id: ''});
  const userData = JSON.parse(sessionStorage.user);

  const createChatFetch = async () => {
    try {
      const fetchApi = await fetch('http://localhost:5000/channel', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userData[0].token}`}
      });
      const data = await fetchApi.json();
      return data
    } catch(err) {
      return err.message
    }
  }
  
  const handleInputChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value, user_id: userData[0].id})
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