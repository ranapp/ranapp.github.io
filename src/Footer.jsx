import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles/footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer> 
                <div className="icons">
                
                <a href="https://www.linkedin.com/in/aryaranadive/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/ranapp"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://instagram.com/arirana.jpg?igshid=OGQ5ZDc2ODk2ZA=="><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="mailto:aryaaranadive@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <p>{`© ${year} Arya Ranadive `}</p>
            </footer>

        </>
    ); 
    
  };
  
  export default Footer;