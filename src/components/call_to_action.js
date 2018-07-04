import React from "react";
import { Col, Row, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
/**
 * Simple call to action
 */
const callToAction = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <h2>Ready to locate your nearby stores?</h2>
          <Button bsStyle="primary" componentClass={Link} to="/search">
            OK, Continue
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default callToAction;
