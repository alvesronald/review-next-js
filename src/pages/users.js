import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Users() {

  const [users, setUsers] = useState([])

 const fetchUsers = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const data = await response.data
    setUsers(data)
  }


  useEffect(() => {
    fetchUsers()
  },[])

  return(
    <div>
      {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </div>
  )
}




export default Users;