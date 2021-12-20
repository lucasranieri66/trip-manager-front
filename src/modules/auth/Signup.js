import "../common/authBase.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

async function signupUser(credentials, type) {
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
    type
  } = props
  const navigate = useNavigate()

  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

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

    if ("id" in token) {
      navigate(`/${type}/signin`)
    }
  }

  function showCompany(type) {

    if (type == "agent") {
      return (
        < label >
          <p>Nome da empresa</p>
          <input type="text" onChange={e => setCompany(e.target.value)} />
        </label>
      )
    }
    return null
  }

  return (
    <div className="absolute" >
      <div id="initialPageContainer" className="teste">
        <div className="teste">
          <div id="initialPageLogo" className="teste">
            <h1>Bem-Vindo {type == "agent" ? "Agente" : "Viajante"}: faça seu cadastro</h1>
          </div>
          <div className="">
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                <div className="teste">
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
                </div>
                <div style={{ marginLeft: '20px' }} className="teste">
                  {showCompany(type)}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Signin;
