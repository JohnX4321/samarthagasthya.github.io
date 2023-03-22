import React , {useContext} from "react";
import { Button,Card, Badge , Col } from "react-bootstrap";
import * as PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import ReactMarkdown from "react-markdown";

const styles = {
    badgeStyle : {
        padding: 10,
        margin: 5
    },
    cardStyle : {
        borderRadius: 10
    },
    cardTitleStyle: {
        fontSize: 24,
        fontWeight: 700
    },
    cardTextStyle: {
        textAlign: "left"
    },
    linkStyle: {
        textDecoration: "none",
        padding: 10
    },
    buttonStyle: {
        margin: 5
    }
};

const ProjectCard = (props) => {
    const theme = useContext(ThemeContext);
    const parseBodyText = (text) => <ReactMarkdown children={text} />
    const {project} = props;

    return (
        <Col>
        <Card style={{...styles.cardStyle, backgroundColor: theme.cardBackground, borderColor: theme.cardBorderColor}}
        text = {theme.bsSecondaryVariant}>

        </Card>
        
        <Card.Img variant="top" src={project?.image} style={{maxWidth: 120, maxHeight: 200}}/>
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
        </Col>
    );

};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired,
        image: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })),
        tags: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};

export default ProjectCard;