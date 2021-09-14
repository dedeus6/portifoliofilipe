import Header from "../../components/Header";
import "./styles.css";
import Footer from "../../components/Footer";
import { Icon } from "@iconify/react";

const MySkills = () => {
  let obj = [
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
      icon: "cib:java",
      name: "Java",
    },
    {
      icon: "akar-icons:javascript-fill",
      name: "JavaScript",
    },
    {
      icon: "cib:git",
      name: "Git",
    },
    {
      icon: "bi:bootstrap-fill",
      name: "Bootstrap",
    },
    {
      icon: "file-icons:docker",
      name: "Docker",
    },
    {
      icon: "fontisto:nodejs",
      name: "NodeJs",
    },
    {
      icon: "akar-icons:python-fill",
      name: "Python",
    },
    {
      icon: "akar-icons:sass-fill",
      name: "SASS",
    },
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
    {
      icon: "simple-icons:selenium",
      name: "Selenium",
    },
    {
      icon: "file-icons:cucumber",
      name: "Cucumber",
    },
    {
      icon: "cib:angular",
      name: "Angular",
    },
    {
      icon: "file-icons:delphi",
      name: "Delphi",
    },
    {
      icon: "file-icons:tortoisesvn",
      name: "SVN",
    },
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
      icon: "simple-icons:apachemaven",
      name: "Maven",
    },
  ];
  return (
    <>
      <Header />
      <p className="white-title title">Minhas skills</p>
      <div className="myskills-container">
        {obj.map((item, idx) => (
          <div className="skill" key={idx}>
            <div>
              <Icon icon={item.icon} color="#00DF5E" fontSize="90" />
            </div>
            <p className="white-title description">{item.name}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MySkills;
