import {Typewriter} from "../lib/typewriter/components/Typewriter.tsx";
import {Fade} from "react-bootstrap";
import FallbackSpinner from "./FallbackSpinner.tsx";
import {Footer} from "./Footer.tsx";

const styles = {
    nameStyle: {
        fontSize: '3.5em',
        verticalAlign: 'middle',
        marginTop: 'auto',
    },
    inlineChild: {
        display: "inline-block"
    },
    mainContainer: {
        height: "80%",
        justifyContent: "center" as const,
        alignItems: "center" as const,
        verticalAlign: "bottom" as const,
        paddingBottom: 50
}
};

const data = {
    name: "Samarth Agasthya Mandya Subramanya",
    currentRole: "Pursuing MSCS @ ASU",
    subheader: "Highly motivated software engineer with 4+ YoE",
    roles: ["Mobile App Developer", "Embedded Systems Developer" , "AI/ML Developer", ""],
    imageSource: "images/about/profile.jpg"
};

const Home = () => {
    return (
        <>
            {data ? (
                <Fade in={true}>
                    <div style={styles.mainContainer}>
                        <img src={data?.imageSource} alt="profile" style={{ width: 100, height: 100, marginTop: 40}} />
                        <h1 style={styles.nameStyle}>{data?.name}</h1>
                        <h3>{data?.currentRole}</h3>
                        <h3>{data?.subheader}</h3>
                        <div style={{flexDirection: "row"}}>
                            <Typewriter words={data?.roles}
                                        loop={true}
                                        cursorColor="white"
                                        cursor />
                        </div>
                        <Footer />
                    </div>
                </Fade>
            ): <FallbackSpinner />}
        </>
    );
}

export default Home;
