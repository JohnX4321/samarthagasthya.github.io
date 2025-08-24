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
        fontWeight: 500
    },
    introImageContainer: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
};

const certificationsData = {
    links: [
        {
            name: "Google CloudSkillBoost",
            icon: "",
            link: "https://www.cloudskillsboost.google/public_profiles/f8de03bb-f0e0-44b2-9e46-755e3d644f0e"
        },
        {
            name: "Credly",
            icon: "",
            link: "https://www.credly.com/users/samarth-agasthya-m-s"
        },
        {
            name: "Microsoft Skills",
            icon: "",
            link: "https://learn.microsoft.com/en-gb/users/samarthagasthyams-7917"
        },
    ],
    data: [
        "Android Enterprise Expert",
        "Meta iOS Developer Certificate",
        "Meta Android Developer Certificate",
        "Meta Frontend Developer Certificate",
        "Meta AR Developer Certificate",
        "DeepLearning.AI TensorFlow Developer Certificate",
        "Microsoft Technical Associate - Python",
        "OCI 2025 AI Foundations",
        "OCI 2025 Cloud Foundations Associate"
    ]
}

type HeaderProps = {
    header: string
};

const Certifications = (props: HeaderProps) => {
    const {header} = props;

    const parseIntro = (text: string) => (
        <ReactMarkdown children={text} />
    )

    return(
        <>
            <Header title={header} />
            <div style={{marginBottom: 20}}>
                {
                    certificationsData.links.map((l) => (
                        <>
                            <a href={l.link} key={l.name}>{l.name}</a>
                            <br/>
                        </>
                    ))
                }
            </div>
            <p>
                <h3>Important Certifications: </h3>
                {
                    certificationsData.data.map((l) => (
                        <>
                            <div>{l}</div>
                            <br/>
                        </>
                    ))
                }
            </p>
        </>
    )


}

export default Certifications;
