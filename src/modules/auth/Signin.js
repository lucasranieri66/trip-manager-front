import '../common/authBase.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Signin(props) {
  const {
    isAuth,
    type
  } = props

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    // setToken(token);

    //caso o token não esteja vazio
    if (token) {
      isAuth(true)
    }

    console.log(token)
  }

  return (
    <div className='absolute'>
      <div id='initialPageContainer'>
        <div>
          <div id='initialPageLogo'>
            <h1>Bem-Vindo {type == 'agent' ? 'Agente' : 'Viajante'}: faça seu login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Usuario</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Senha</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          <Link to={'/agent/signup'}>Cadastre-se</Link>
          <Link to={'/'}>Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
