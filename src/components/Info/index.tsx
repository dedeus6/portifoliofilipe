import "./styles.css";
import { Icon } from "@iconify/react";

const Info = () => {
  return (
    <div className="container-geral">
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <Icon icon="akar-icons:github-fill" fontSize="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">Github</p>
            <p className="item-subtitle">/dedeus6</p>
          </div>
        </div>
      </div>
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <Icon icon="entypo:email" fontSize="30" color="#00DF5E" />
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
            <Icon icon="akar-icons:whatsapp-fill" fontSize="30" color="#00DF5E" />
          </div>
          <div className="item-content">
            <p className="item-title">WhatsApp</p>
            <p className="item-subtitle">+55 (61) 98355-9013</p>
          </div>
        </div>
      </div>
      <div className="info-component-container">
        <div className="item-container">
          <div className="circle-container">
            <Icon icon="akar-icons:linkedin-fill" fontSize="30" color="#00DF5E" />
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
