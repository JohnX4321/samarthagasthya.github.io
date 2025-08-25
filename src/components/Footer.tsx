import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"
import "../App.css";

const styles = {
    footerParent: {
        marginTop: "auto",
    },
    footerChildMobile: {
        backgroundColor: "purple",
        width: "100vw",
        maxHeight: 200,
    },
    footerChildDesktop: {
        backgroundColor: "purple",
        width: "100vw",
        position: "fixed",
        left: 0,
        bottom: 0,
        maxHeight: 200,
    }
}

export const Footer = () => {

    const w = window.innerWidth;
    let footerStyle = styles.footerChildMobile
    if (w > 768) {
        footerStyle = styles.footerChildDesktop;
    }

    return (
        <footer className="footer" style={styles.footerParent}>
            <div style={footerStyle}>
                <p>Built with &hearts; from ReactJS, Bootstrap, Styled Components , ThreeJS and hosted on Vercel </p>
                <p>Contact: <a href="https://github.com/JohnX4321/" target="_blank noreferrer"><SiGithub/></a>  <a href="https://www.linkedin.com/in/samarth-agasthya-m-s/" target="_blank noreferrer"><SiLinkedin/></a></p>
                <p>&reg; {new Date().getFullYear()} - View code at <a href="https://github.com/JohnX4321/samarthagasthya.github.io" target="_blank noreferrer"><SiGithub
                    color="white"/></a></p>
            </div>
        </footer>
    )
}