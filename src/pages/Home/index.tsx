import './styles.css';
import Logo from '../../assets/img/home-img.svg';
import Info from "../../components/Info";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="top-container">
          <div className="info-container">
              <p className="white-title info-title">Olá, eu sou o <br/>Filipe de Deus :)</p>
              <p className="info-subtitle">Desenvolvedor Full Stack</p>
              <div className="buttons-container">
                <a href="https://drive.google.com/file/d/1Suxw9mxamSbitW-qaJr8-g_GBK4izEms/view?usp=sharing" target="_blank" rel="noreferrer">
                  <div className="btn-cv-container btn-container">
                    <p className="btn-cv btn-content">Download CV</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/dedeus6/" target="_blank" rel="noreferrer">
                  <div className="btn-contato-container btn-container">
                    <p className="btn-contato btn-content">Entrar em contato</p>
                  </div>
                </a>
              </div>
          </div>
          <div className="img-container">
              <img src={Logo} alt="Logo"/>
          </div>
        </div>
        <div className="sobre-mim-container">
          <p className="white-title sobre-title">Sobre mim</p>
          <div className="sobre-content">
            <p>Estudando Análise e Desenvolvimento de Sistemas.
              Desenvolvedor full stack apaixonado por tecnologia e desenvolvimento de aplicativos, amante de desafios.
              Programação por profissão e hobby.
              Cerca de 2 anos de atuação na área de desenvolvimento full stack.
            </p>
          </div>
        </div>
      <Info />
      </div>
      <Footer />
    </>
  );
};

export default Home;
