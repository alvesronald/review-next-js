import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

function Profile({ user = {} }) {
    console.log(user)


  return(
    <div>
      <h1>Profile</h1>
     <li>{user.name}</li>
    </div>
  )
}

export async function getStaticProps(context) {
    const response = await axios('https://jsonplaceholder.typicode.com/users',
    {
        params:{   id: context.params.id }}
    )
    const user = await response.data[0]

    return {
      props: {
          user
      }, 
    }
  }


  export async function getStaticPaths() {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const users = await response.data

    const paths = users.map((user) => {
      return { params: { id: String(user.id) }}
    })

    return {
      paths,
      fallback: true // se false, bloqueia  a pesquisa de outros params, se true eu consigo pesquisar qualquer outro parametro, porém não é de forma estatica

    };
  }


export default Profile;