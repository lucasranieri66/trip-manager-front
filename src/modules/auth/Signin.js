import '../common/authBase.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials, type) {
  return fetch(`http://localhost:3333/${type}-signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    .catch(err => {
      throw new Error(err)
    })
}

function Signin(props) {
  const {
    type
  } = props
  const navigate = useNavigate()

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    }, type);
    // setToken(token);

    //caso o token não esteja vazio
    if ('id' in token) {
      console.log("o login é possível")
      sessionStorage.clear()
      sessionStorage.setItem('token', JSON.stringify(token.id))
      sessionStorage.setItem('type', type)
      navigate('/')
      // return <Navigate to={{ "pathname": '../' }} /> //teste
    }
    console.log("o login não é possível")
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
