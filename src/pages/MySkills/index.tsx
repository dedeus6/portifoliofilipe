import Header from "../../components/Header";
import "./styles.css";
import { Icon } from "@iconify/react";

const MySkills = () => {
  const lingugagens = [
    {
      icon: "cib:java",
      name: "Java",
    },
    {
      icon: "akar-icons:javascript-fill",
      name: "JavaScript",
    },
    {
      icon: "akar-icons:python-fill",
      name: "Python",
    },
    {
      icon: "file-icons:delphi",
      name: "Delphi",
    },
  ]
  const db = [
    {
      icon: "fontisto:oracle",
      name: "DB Oracle",
    },
    {
      icon: "cib:postgresql",
      name: "DB PostgreSQL",
    },
    {
      icon: "cib:mysql",
      name: "MySQL",
    },
  ]
  const versionamento = [
    {
      icon: "cib:git",
      name: "Git",
    },
    {
      icon: "file-icons:tortoisesvn",
      name: "SVN",
    },
  ]
  const teste = [
    {
      icon: "file-icons:karma",
      name: "Karma",
    },
    {
      icon: "file-icons:jasmine",
      name: "Jasmine",
    },
    {
      icon: "simple-icons:junit5",
      name: "JUnit 5",
    },
    {
      icon: "simple-icons:selenium",
      name: "Selenium",
    },
    {
      icon: "file-icons:cucumber",
      name: "Cucumber",
    },
    {
      icon: "simple-icons:sonarqube",
      name: "SonarQube",
    },
  ]
  const frontend = [
    {
      icon: "fontisto:html5",
      name: "HTML",
    },
    {
      icon: "fa-brands:css3",
      name: "CSS",
    },
    {
      icon: "akar-icons:react-fill",
      name: "React",
    },
    {
      icon: "akar-icons:sass-fill",
      name: "SASS",
    },
    {
      icon: "cib:angular",
      name: "Angular",
    },
    {
      icon: "bi:bootstrap-fill",
      name: "Bootstrap",
    },
  ]
  const backend = [
    {
      icon: "bx:bxl-spring-boot",
      name: "Sprintboot",
    },
    {
      icon: "fontisto:nodejs",
      name: "NodeJs",
    },
  ]
  const cicd = [
    {
      icon: "file-icons:docker",
      name: "Docker",
    },
    {
      icon: "bx:bxl-kubernetes",
      name: "Kubernetes",
    },
    {
      icon: "cib:jenkins",
      name: "Jenkins",
    },
    {
      icon: "cib:quarkus",
      name: "Quarkus",
    },
  ]
  const pacotes = [
    {
      icon: 'akar-icons:npm-fill',
      name: 'NPM'
    },
    {
      icon: "simple-icons:apachemaven",
      name: "Maven",
    },
  ]

  function handleTopPage() {
    if (window.scrollX === 0 && window.screenY === 0) {
      return;
    }
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <div className="top-sumary-container" onClick={handleTopPage}>
        <Icon className="top-icon" icon="akar-icons:circle-chevron-up-fill" fontSize="70" color="#00DF5E" />
      </div>
      <p className="white-title title" id="linguagens">Linguagens</p>
      <div className="myskills-container"> 
        {lingugagens.map((item, idx) => (
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
        {frontend.map((item, idx) => (
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
        {backend.map((item, idx) => (
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
        {cicd.map((item, idx) => (
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
        {pacotes.map((item, idx) => (
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
        {db.map((item, idx) => (
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
        {versionamento.map((item, idx) => (
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
        {teste.map((item, idx) => (
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
