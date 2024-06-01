import '../styles/components/socialnetworks.sass'

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/guilherme-silva-faacg/"},
    {name: "github", icon: <FaGithub/>, link: "https://github.com/gui-silva-github"},
    {name: "instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/gui_do_excel"},
]

const SocialNetworks = ()=>{

    return(
        <section id="social-networks">
            {socialNetworks.map((network)=>(
                <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )

}

export default SocialNetworks