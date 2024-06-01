import Avatar from '../img/perfilHome.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Linguas from '../img/linguas.jpeg'
import '../styles/components/sidebar.sass'
import '../styles/components/technologiescontainer.sass'

import {
  DiWindows,
  DiLinux,
  DiApple,
  DiChrome,
  DiVisualstudio,
  DiNetbeans,
  DiWordpress,
  DiAndroid
} from 'react-icons/di'

function Sidebar() {

    return (
      <aside id="sidebar">
        
        <img src={Avatar} alt="Guilherme Silva" />

        <p className="title">Desenvolvedor Full-Stack</p>

        <SocialNetworks/>

        <InformationContainer/>

        <a href="" className="btn">Download currículo</a>

        <h2>Ferramentas mais usadas</h2>
        <div className="space"></div>
        <div className="technologies-container">
          <div className="technologies-grid">
              <div className="technology-card">
                <DiWindows/>
              </div>
              <div className="technology-card">
                <DiLinux/>
              </div>
              <div className="technology-card">
                <DiApple/>
              </div>
              <div className="technology-card">
                <DiChrome/>
              </div>
              <div className="technology-card">
                <DiVisualstudio/>
              </div>
              <div className="technology-card">
                <DiAndroid/>
              </div>
              <div className="technology-card">
                <DiNetbeans/>
              </div>
              <div className="technology-card">
                <DiWordpress/>
              </div>
          </div>
        </div>

        <h2 className='idioma'>Idiomas</h2>
        <div className="space"></div>
        <h3>
          Português e Inglês
        </h3>
        <img src={Linguas} alt="línguas" className='ln'/>
      </aside>
    )
  }
  
  export default Sidebar