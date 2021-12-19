import { Navigate } from 'react-router-dom';
import './InitialPage.css';

function InitialPage(props) {
    if (props.isAuth)
        return (
            <Navigate to={{ pathname: '/test' }} />
        );
    else
        return (
            <div className='absolute'>
                <div id='initialPageContainer' style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <div id='initialPageLogo' style={{ display: "inline-block" }}>
                            <h1>InitialPage</h1>
                        </div>
                        <div id='loginType' style={{ display: "flex", flexDirection: "column", fontSize: '20px' }}>
                            <a href='/agent/signin' style={{ marginTop: "3px" }}> Login - Agente de viagem </a>
                            <a href='/traveller/signin' style={{ marginTop: "3px" }}> Login - Viajante </a>
                            <a href='/agent/create-package' style={{ marginTop: "3px" }}>Área do agente</a>
                            <a href='#' style={{ marginTop: "3px" }}>Área do viajante</a>
                        </div>
                    </div>

                </div>
            </div>
        );
}

export default InitialPage;
