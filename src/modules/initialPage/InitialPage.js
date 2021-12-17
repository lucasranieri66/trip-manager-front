import { Navigate } from 'react-router-dom';
import './InitialPage.css';

function InitialPage(props) {
    if (props.isAuth)
        return (
            // obs: mudar de /signin para a tela principal
            <Navigate to={{ pathname: '/test' }} />
        );
    else
        return (
            <div className='absolute'>
                <div id='initialPageContainer'>
                    <div>
                        <div id='initialPageLogo'>
                            <h1>InitialPage</h1>
                        </div>
                        <div id='loginType'>
                            <a href='/agent/signin'> Agente de viagem </a>
                            <a href='/traveller/signin'> Viajante </a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default InitialPage;
