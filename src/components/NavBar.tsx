import {Container, Nav, Navbar} from "react-bootstrap";
import { useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components";
import ThemeToggle from "./ThemeToggle.tsx";
import {useNavigate,NavLink} from "react-router-dom";

/*const styles = {
    logoStyle: {
        width: 50,
        height: 40
    }
};*/

const ExternalLink = styled.a`
    color: ${(props) => props.theme.navbarTheme.linkColor};

    &:hover {
        color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    }

    &::after {
        background-color: ${(props) => props.theme.accentColor};
    }
`;

const InternalLink = styled(NavLink)`
    color: ${(props) => props.theme.navbarTheme.linkColor};
    text-decoration: none;
    margin-left: 30px;
    margin-right: 30px;
    &:hover {
        color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    }

    &::after {
        background-color: ${(props) => props.theme.accentColor};
    }

    &.navbar__link--active {
        color: ${(props) => props.theme.navbarTheme.linkActiveColor};
    }
`;

//link, int
const data = {
    logo: {
        source: "images/logo.png",
        height: 45,
        width: 50
    },
    sections: [
        {
            title: "Home",
            href: "/",
            type: "int"
        },
        {
            title: "Education",
            href: "/edu",
            type: "int"
        },
        {
            title: "Skills",
            href: "/skills",
            type: "int"
        },
        {
            title: "Experience",
            href: "/experience",
            type: "int"
        },
        {
            title: "Projects",
            href: "/projects",
            type: "int"
        },
        {
            title: "Certifications",
            href: "/certifications",
            type: "int"
        }
    ]
};

const NavBar = () => {

    const theme = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar fixed="top" expand="md"
                bg="dark" variant="dark"
                className="navbar-custom"
                expanded={expanded}>
            <Container>
                {data?.logo && (
                    <Navbar.Brand href="/"></Navbar.Brand>
                )}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                               onClick={() => setExpanded(!expanded)}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        {data && data.sections?.map((s, i) =>  (s?.type === "link" ? (
                            <ExternalLink
                                key={s.title} href={s.href}
                                target={"_blank"} rel={"noopener noreferrer"}
                                onClick={() => setExpanded(false)}
                                className={"navbar__link"}
                                theme={theme}>
                                {s.title}
                            </ExternalLink>
                        ) : (
                            <InternalLink
                                key={s.title} onClick={() => setExpanded(false)}
                                end={(i == 0)}
                                className={({isActive}) => isActive ? "navbar__link--active" : "navbar__link"}
                                to={s.href} theme={theme}
                            >
                                {s.title}
                            </InternalLink>
                        )))}
                    </Nav>
                    <ThemeToggle onClick={() => setExpanded(false)}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line react-refresh/only-export-components
export const withRouter = (Component) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;