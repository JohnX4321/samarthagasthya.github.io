import ReactMarkdown from "react-markdown";
import {Container,Col,Row} from "react-bootstrap";
import {Fade} from "react-bootstrap";
import Header from "./Header.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";

const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: "column" as const,
        whiteSpace: "pre-wrap" as const,
        textAlign: "left" as const,
        fontSize: "1.2em",
        width: "auto",
        fontWeight: 500
    },
    introImageContainer: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
};

const edData = [
    {
        degree: "Master of Science (Computer Science)",
        duration: "Fall 2025 - Spring 2027",
        college: "Arizona State University, Tempe, AZ, USA",
        coursework: "Computer Architecture, Statistical Learning Theory"
    },
    {
        degree: "Bachelor of Engineering (Electronics & Communication Engineering)",
        duration: "Fall 2017 - Spring 2021",
        college: "Dayananda Sagar College of Engineering (autonomous under Visvesvaraya Technological University), Bengaluru, KA, India",
        coursework: "Embedded Systems, DSA, State Machines, Computer Organization, C"
    },
    {
        degree: "Pre-University/12th Grade (PCMC/Computer Science)",
        duration: "2015-2017",
        college: "Jnana Sweekar PU College , Bengaluru, KA, India",
        coursework: "DBMS, C++, DSA "
    },
    {
        degree: "10th Grade",
        duration: "2015",
        college: "Indian Certificate for Secondary Education (ICSE)",
        coursework: "DBMS, Java, QBASIC, C"
    }
]

type HeaderProps = {
    header: string
};

const About = (props: HeaderProps)=> {
    const {header} = props;

    const parseIntro = (text: string) => (
        <ReactMarkdown children={text} />
    )

    return  (
        <>
        <Header title={header} />
            <div className="section-content-container" style={{width:'auto'}}>
                <Container fluid>
                    {edData
                    ? (edData.map((data) =>
                            (
                                <Fade in={true} key={data.degree}>
                                    <>
                                    <Row className="justify-content-between" style={{width: "auto"}}>
                                        <Col xs="auto" style={styles.introTextContainer}>
                                            {data.degree}
                                        </Col>
                                        <Col xs="auto" style={styles.introTextContainer}>
                                            {data.duration}
                                        </Col>
                                    </Row>
                                    <div style={{width:'auto',left: 0,textAlign: "start",marginLeft: 10}}>{data.college}</div>
                                        <div style={{width:'auto',left: 0,textAlign: "start",marginLeft: 10}}><b>Coursework: </b>{data.coursework}</div>
                                    </>
                                </Fade>
                            )
                        )): <FallbackSpinner />}
                </Container>
            </div>
        </>
    );

}

export default About;