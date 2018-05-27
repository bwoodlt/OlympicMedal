import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Grid, Alert, Glyphicon } from "react-bootstrap";

/**
 * For presenting the title and
 * description
 */
const TopSection = ({ title, description }) => {
  return (
    <Jumbotron>
      <Grid>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <br />
          <Alert bsStyle="success">
            <p>You can achieve the following:</p>
          </Alert>
        </div>
      </Grid>
    </Jumbotron>
  );
};

TopSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TopSection;
