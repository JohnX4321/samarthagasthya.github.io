import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"
import "../App.css";

export const Footer = () => (
    <footer className="footer" style={{marginTop: "auto"}}>
        <div style={{backgroundColor: "purple", width: "100%", position: "absolute", left: 0,bottom: 0}}>
            <p>Built with &hearts; from ReactJS, Bootstrap, Styled Components , ThreeJS and hosted on Vercel </p>
            <p>Contact: <a href="https://github.com/JohnX4321/" target="_blank noreferrer"><SiGithub/></a>  <a href="https://www.linkedin.com/in/samarth-agasthya-m-s/" target="_blank noreferrer"><SiLinkedin/></a></p>
            <p>&reg; {new Date().getFullYear()} - View code at <a href="https://github.com/JohnX4321/samarthagasthya.github.io" target="_blank noreferrer"><SiGithub
                color="white"/></a></p>
        </div>
    </footer>
)