import "./styles.css";
import { Icon } from "@iconify/react";
import { mockTechs } from "mocks/techs.mock";

const MySkills = () => {

  function handleTopPage() {
    if (window.scrollX === 0 && window.screenY === 0) {
      return;
    }
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="top-sumary-container" onClick={handleTopPage}>
        <Icon className="top-icon" icon="akar-icons:circle-chevron-up-fill" fontSize="70" color="#00DF5E" />
      </div>
      <p className="white-title title" id="linguagens">Linguagens</p>
      <div className="myskills-container"> 
        {mockTechs.linguagens.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="frontend">Frontend</p>
      <div className="myskills-container">
        {mockTechs.frontend.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="backend">Backend</p>
      <div className="myskills-container">
        {mockTechs.backend.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="cicd">CI/CD | Containers</p>
      <div className="myskills-container">
        {mockTechs.cicd.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="pacotes">Gerenciador de pacotes</p>
      <div className="myskills-container">
        {mockTechs.pacotes.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="db">Database</p>
      <div className="myskills-container">
        {mockTechs.database.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="versionamento">Versionamento</p>
      <div className="myskills-container">
        {mockTechs.versionamento.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="white-title title" id="testes">Testes</p>
      <div className="myskills-container">
        {mockTechs.testes.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MySkills;
