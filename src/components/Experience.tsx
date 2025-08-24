import {useContext} from "react";
import VerticalTimelineElement from "../lib/vertical-timeline/VerticalTimelineElement"
import VerticalTimeline from "../lib/vertical-timeline/VerticalTimeline.tsx";
import {Container,Fade} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import {ThemeContext} from "styled-components";
import Header from "./Header.tsx";
import FallbackSpinner from "./FallbackSpinner.tsx";
import "../styles/experience.css"
import "../lib/vertical-timeline/VerticalTimeline.css"
import "../lib/vertical-timeline/VerticalTimelineElement.css"

const styles = {
    ulStyle: {
        listStylePosition: 'outside' as const,
        paddingLeft: 20,
    },
    subtitleContainerStyle: {
        marginTop: 10,
        marginBottom: 10,
    },
    subtitleStyle: {
        display: 'inline-block',
    },
    inlineChild: {
        display: 'inline-block',
    },
    itemStyle: {
        marginBottom: 10,
    },
};

const data = {
    experiences: [
        {
            title: "Application Developer - Android Applications",
            subtitle: "Ather Energy Ltd",
            workType: "Full-time",
            workDescription: [
                "Develop HMI layer of Vehicle interfacing with multiple Embedded Systems ",
                "Develop common Factory and Diagnostics Software",
                "Develop & Test Navigation Systems using multiple Map providers",
                "Perform R&D on multiple features and concepts",
                "Leveraged AI tools(Gemini,Claude,GPT) to enhance functionality and integration",
                "Stabilize Bluetooth Low Energy and Wifi Architectures"
            ],
            dateText: "02/2024 – 07/2025"
        },
        {
            title: "Member of Technical Staff",
            subtitle: "42Gears Mobility Systems Pvt Ltd",
            workType: "Full-time",
            workDescription: [
                "Develop & manage MDM solution for Enterprise Customers",
                "Develop android apps for Phone, POS, SmartWatches & Immersive Tech Headsets(VR)",
                "Work closely with Android Enterprise Community to resolve bugs",
                "Develop innovative solutions for Remote Support features on non-standard and unsupported platforms",
                "Architected and Developed new Mobile Application to lock Camera in sensitive areas for enterprises"
            ],
            dateText: "07/2021 – 01/2024"
        },
        {
            title: "Application Developer",
            subtitle: "Vrook Inc",
            workType: "Internship",
            workDescription: [
                "Develop User Interface and framework for chatbot using React & React Native",
                "Implement and Deploy learning platform based on OpenEdX",
                "Modify content for VR platforms accessibility"
            ],
            dateText: "07/2020 – 12/2020"
        },
        {
            title: "Android Developer",
            subtitle: "Dwaiampayana Technologies",
            workType: "Internship",
            workDescription: [
                "Developed Mobile application for e-commerce Laundry Platform with PHP Backend",
                "Developed Mobile application for Temple Details and Seva(Divine Services) Booking with Payment Integration",
                "Developed Mobile Application for Mobile Service Company",
                "Developed PHP backend for Hindi to English translation and transliteration",
            ],
            dateText: "03/2020 – 06/2020"
        },
        {
            title: "Java Developer",
            subtitle: "Eckovation",
            workType: "Internship",
            workDescription: [
                "Develop an aggregated applicable for cab hailing, food ordering and location services using available Indian Services at that time (OlaCabs,Zomato,Google Maps)",
            ],
            dateText: "06/2019"
        }
    ]
}

type ExperienceProps = {
    header: string
}

const Experience = (props: ExperienceProps) => {
    const theme = useContext(ThemeContext);
    const {header} = props;

    return (
        <>
        <Header title={header} />
            {data ?
                (
                    <div className="section-content-container">
                        <Container>
                            <VerticalTimeline lineColor={theme?.timelineLineColor} >
                                {data.experiences.map((item) => (
                                    <Fade in={true}>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            key={item.title + item.dateText}
                                            date={item.dateText}
                                            style={styles.itemStyle}
                                            contentStyle={{color: theme?.color}}>
                                            <h2 className="item-title">
                                                {item.title}
                                            </h2>
                                            <div style={styles.subtitleContainerStyle}>
                                                <h4 style={{...styles.subtitleStyle, color: theme?.accentColor}}>
                                                    {item.subtitle}
                                                </h4>
                                                {item.workType && (
                                                    <h5 style={{...styles.inlineChild, color: theme?.background}}>
                                                        &nbsp;·
                                                        {" "}
                                                        {item.workType}
                                                    </h5>
                                                )}
                                            </div>
                                            <ul style={styles.ulStyle}>
                                                {item.workDescription.map((point) => (
                                                    <div key={point}>
                                                        <li style={{color: theme?.background}}>
                                                            <ReactMarkdown
                                                                children={point}
                                                                components={{
                                                                    p: "span"
                                                                }}
                                                                />
                                                        </li>
                                                        <br />
                                                    </div>
                                                ))}
                                            </ul>
                                        </VerticalTimelineElement>
                                    </Fade>
                                ))}
                            </VerticalTimeline>
                        </Container>
                    </div>
                ) : <FallbackSpinner />}
        </>
    )
}

export default Experience;