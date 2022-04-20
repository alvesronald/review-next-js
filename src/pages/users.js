import axios from 'axios';
import React from 'react';

function Users({users}) {


  return(
    <div>
      {users?.map(user => <li key={user.id}>{user.name}</li>)}
    </div>
  )
}


export async function getServerSideProps(context) {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const data = response.data
  return {
    props: { users: data }, // will be passed to the page component as props
  }
}

export default Users;