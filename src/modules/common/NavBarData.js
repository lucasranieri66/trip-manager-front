import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import './MainTemplate.css'

export const NavBarData = [
    {
        title: 'Criar pacotes',
        path: '/agent/create-package',
        icon: <GoIcons.GoPackage color='grey' />,
        cName: 'nav-text'
    },
    {
        title: 'Ver pacotes',
        path: '/agent/view-package',
        icon: <FaIcons.FaPassport color='grey' />,
        cName: 'nav-text'
    },
]