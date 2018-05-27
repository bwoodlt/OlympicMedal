import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Grid, Glyphicon, Alert } from "react-bootstrap";

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
          <p>Features:</p>
          <Alert style={style.feature}>
            <p style={style.font}>
              <Glyphicon glyph="star" />
              &nbsp; Sort by ascending and descending order.
            </p>
            <p style={style.font}>
              <Glyphicon glyph="star" />
              &nbsp; Delete one or more items by selecting checkboxes and the
              delete button.
            </p>
            <p style={style.font}>
              <Glyphicon glyph="star" />
              &nbsp; Add new item to list.
            </p>
            <p style={style.font}>
              <Glyphicon glyph="star" />
              &nbsp; Sort using either the sort button or the caret on headers.
            </p>
          </Alert>
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
    display: "inline-flex"
  }
};

TopSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TopSection;
