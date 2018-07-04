import React from "react";
import PropTypes from "prop-types";
import {
  Jumbotron,
  PageHeader,
  Col,
  Grid,
  Glyphicon,
  Alert
} from "react-bootstrap";

/**
 * For presenting the title and
 * description
 */
const TopSection = ({ title, description }) => {
  return (
    <Jumbotron>
      <Grid>
        <div>
          <PageHeader>
            {title}
            <br />
            <small className="subItem">{description}</small>
          </PageHeader>
          <br />
          <p>Features:</p>
          <Col xs={12} md={6} mdPush={3}>
            <Alert style={style.feature}>
              <ul className="list-unstyled features">
                <li>
                  <Glyphicon glyph="check" />
                  &nbsp; Routing
                </li>
                <li>
                  {" "}
                  <Glyphicon glyph="check" />
                  &nbsp; Data manipulation.
                </li>
                <li>
                  <Glyphicon glyph="check" />
                  &nbsp; Search functionality
                </li>
                <li>
                  <Glyphicon glyph="check" />
                  &nbsp; Store navigation (when result item is clicked)
                </li>
                <li>
                  <Glyphicon glyph="star" />
                  &nbsp; High Contrast mode &nbsp;
                  <span>(1 scenario not finalised)</span>
                </li>
              </ul>
            </Alert>
          </Col>
        </div>
      </Grid>
    </Jumbotron>
  );
};

const style = {
  font: {
    fontSize: 15
  },
  feature: {
    display: "block"
  }
};

TopSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TopSection;
