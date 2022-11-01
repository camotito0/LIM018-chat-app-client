import { useEffect, useState } from 'react';

function Channels() {
  const [data, setData] = useState([]);
  const userData = JSON.parse(sessionStorage.user)
  
  
  const fetchUsers = () => {
    fetch('http://localhost:5000/users', {
        method:'GET',
        headers: {'Authorization': `Bearer ${userData[0].token}`}
    })
    .then((resp) => resp.json())
    .then((fetchedData) => {
      setData(fetchedData.users)
    })
  }

  useEffect(() => {
    fetchUsers();
  },[])

  useEffect(() => {
  },[data])
  
  return (
      <main>{JSON.stringify(data)} hola</main>
  );
}

export default Channels;