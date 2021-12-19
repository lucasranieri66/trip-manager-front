import "../common/authBase.css"
import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

async function signupUser(credentials, type) {
  // console.log(JSON.stringify(credentials))
  return fetch(`http://localhost:3333/${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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
    isAuth,
    type
  } = props

  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(`${username} ${password} ${confirmation} ${email} ${company} ${firstname} ${lastname}`)

    let token = {}
    if (password == confirmation) {
      token = await signupUser({
        "username": username,
        "firstname": firstname,
        "lastname": lastname,
        "password": password,
        "email": email,
        "company": company
      }, type);
    }

    console.log(token)
  }

  return (
    <div className="absolute">
      <div id="initialPageContainer">
        <div>
          <div id="initialPageLogo">
            <h1>Bem-Vindo {type == "agent" ? "Agente" : "Viajante"}: faça seu cadastro</h1>
          </div>
          <div className="highlight">
            <form onSubmit={handleSubmit}>
              <label>
                <p>Usuario</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
              </label>
              <label>
                <p>Primeiro nome</p>
                <input type="text" onChange={e => setFirstname(e.target.value)} />
              </label>
              <label>
                <p>Ultimo nome</p>
                <input type="text" onChange={e => setLastname(e.target.value)} />
              </label>
              <label>
                <p>Email</p>
                <input type="text" onChange={e => setEmail(e.target.value)} />
              </label>
              <label>
                <p>Nome da empresa</p>
                <input type="text" onChange={e => setCompany(e.target.value)} />
              </label>
              <label>
                <p>Senha</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
              </label>
              <label>
                <p>Repita a senha</p>
                <input type="password" onChange={e => setConfirmation(e.target.value)} />
              </label>
              <div style={{ display: 'flex' }}>
                <button type="submit">Submit</button>
                <a href={`/${type}/signin`}> Voltar </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Signin;
