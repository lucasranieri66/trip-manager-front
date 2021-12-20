import { Navigate } from 'react-router-dom';
import './InitialPage.css';

function InitialPage(props) {

    function logout() {
        sessionStorage.clear()
        window.location.reload()
    }

    if (props.isAuth)
        return (
            <Navigate to={{ pathname: '/test' }} />
        );
    else
        return (
            <div className='absolute'>
                <div id='initialPageContainer' style={{ display: "flex", flexDirection: "column" }}>
                    <div className='teste'>
                        <div id='initialPageLogo' style={{ display: "inline-block" }} className='teste'>
                            <h1>InitialPage</h1>
                        </div>
                        <div className='' id='loginType' style={{ display: "flex", flexDirection: "column", fontSize: '20px' }}>
                            <a className='' href='/agent/signin' style={{ marginTop: "3px" }}> <span style={{ color: "#07f213" }}>Login</span> - Agente de viagem </a>
                            <a className='' href='/traveller/signin' style={{ marginTop: "3px" }}> <span style={{ color: "#07f213" }}>Login</span> - Viajante </a>
                            <a className='' href='/agent/create-package' style={{ marginTop: "3px", color: "yellow" }}>Área do agente</a>
                            <a className='' href='/traveller/view-package' style={{ marginTop: "3px", color: "yellow" }}>Área do viajante</a>
                            <div style={{ cursor: "pointer", color: "#07f213" }} onClick={logout}>Logout</div>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default InitialPage;
