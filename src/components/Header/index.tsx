import './styles.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaAngleDoubleUp, FaHome } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" className="link-react-dom">
                <p className="white-title header-title">Portfólio</p>
            </Link>
            <div className="nav-container">
                <Link to="/">
                    <span className="nav-link"><FaHome size="22"/> <span className="text-link">Início</span></span>
                </Link>
                <a href="https://github.com/dedeus6" target="_blank" rel="noreferrer" className="nav-link"><FaGithub size="22"/> <span className="text-link">Projetos</span></a>
                <Link to="/myskills">
                    <span className="nav-link"><FaAngleDoubleUp size="22"/> <span className="text-link">Minhas Skills</span></span>
                </Link>
            </div>
        </div>
    )
}


export default Header;