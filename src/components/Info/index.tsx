import { FaSmile, FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const Info = () => {
  return (
    <div className="container-geral">
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <FaSmile size="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">Meu Nome</p>
            <p className="item-subtitle">Filipe de Deus</p>
          </div>
        </div>
      </div>
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <FaMailBulk size="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">Email</p>
            <p className="item-subtitle">filipedeus2015@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <FaInstagram size="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">Instagram</p>
            <p className="item-subtitle">@dedeus6</p>
          </div>
        </div>
      </div>
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <FaLinkedin size="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">LinkedIn</p>
            <p className="item-subtitle">/dedeus6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
