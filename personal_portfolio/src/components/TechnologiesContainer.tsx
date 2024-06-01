import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiPython,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiMongodb,
  DiFirebase,
  DiPhp,
  DiJava,
  DiGit,
  DiLaravel,
  DiBootstrap,
  DiPostgresql,
  DiIonic,
  DiJqueryLogo
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5/>},
  {id: "css", name: "CSS3", icon: <DiCss3/>},
  {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap/>},
  {id: "sass", name: "Sass", icon: <DiSass/>},
  {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
  {id: "jquery", name: "JQuery", icon: <DiJqueryLogo/>},
  {id: "react", name: "React", icon: <DiReact/>},
  {id: "node", name: "Node.js", icon: <DiNodejsSmall/>},
  {id: "php", name: "PHP", icon: <DiPhp/>},
  {id: "laravel", name: "Laravel", icon: <DiLaravel/>},
  {id: "java", name: "Java", icon: <DiJava/>},
  {id: "python", name: "Python", icon: <DiPython/>},
  {id: "ionic", name: "Ionic", icon: <DiIonic/>},
  {id: "mysql", name: "MySQL", icon: <DiMysql/>},
  {id: "mongodb", name: "MongoDB", icon: <DiMongodb/>},
  {id: "firebase", name: "Firebase", icon: <DiFirebase/>},
  {id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql/>},
  {id: "git", name: "Git", icon: <DiGit/>},
]

function TechnologiesContainer() {

    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech)=>(
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TechnologiesContainer