import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Alert, Badge } from "react-bootstrap";
import { getPostCodeAddressInfo } from "../utils";

/**
 * For reading and presenting store
 * data to user.
 * @param {*} location
 */
const resultSet = (storeListing) => {
  return (
    <div>
      {storeListing.map((data, index) => {
        const {
          store_name,
          store_type,
          open_status,
          opening_times,
          store_distance,
          store_code,
          contact
        } = data;
        const updatedStoreName = store_name.replace(/\s+/g, "-").toLowerCase();
        const url = `https://stores.sainsburys.co.uk/${encodeURIComponent(
          store_code
        )}/${encodeURIComponent(updatedStoreName)}`;

        return (
          <div className="main" key={index}>
            <Row className="dataRes">
              <Col xs={12} md={1}>
                <h5>{index + 1}</h5>
              </Col>
              <Col xs={12} md={3} className="text-left sName">
                <ul className="list-unstyled parent-list">
                  <li>
                    <a href={url} rel="noreferrer" target="_blank">
                      <strong>{store_name}</strong>
                    </a>
                    <br />
                    <span>{store_type}</span>
                  </li>
                  <li>{contact.address1}</li>
                  <li>{contact.city}</li>
                  <li>{contact.postcode}</li>
                  <br />
                  <li>
                    <strong>Contact</strong>
                    <br />
                    <span>{contact.telephone}</span>
                  </li>
                </ul>
              </Col>

              <Col xs={12} md={2} className="mList">
                <ul className="list-unstyled parent-list">
                  <li>
                    <strong>Manager</strong>
                    <br />
                    <span>{contact.manager}</span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="oList">
                <ul className="list-unstyled parent-list">
                  <li>
                    <strong>Opening hours</strong>
                    <br />
                    <span>{formatOpeningHours(opening_times)}</span>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={3} className="openStatus">
                <ul className="list-unstyled parent-list">
                  <li>
                    <span className="orangeRed">
                      <strong>{open_status}</strong>
                    </span>
                    <br />
                    <span>{Number(store_distance).toFixed(2)} mi</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Returns when there are no results
 */
const noResult = () => {
  return (
    <div>
      <h5>
        No result available. Try <Link to="/search">again</Link>
      </h5>
    </div>
  );
};

const Store = ({ location: { state } }) => {
  const results = useMemo(() => (state && state.results) || [], [state]);

  console.log({ results });
  const validPostcode = results[1] === "EC1N 2HT";

  const [postcodeData, setPostcodeData] = useState();
  const [total, postcode, storeData] = results;

  useEffect(() => {
    (async () => {
      const { result } = await getPostCodeAddressInfo(results[1]);

      setPostcodeData(result);
    })();
  }, [results]);

  return (
    <Grid>
      <Row>
        <Col xs={12} sm={12}>
          <Col className="main-header">
            {validPostcode ? (
              <Alert variant="success" dismissible>
                <p>
                  <Badge bg="success">{total}</Badge> Results for {postcode}
                </p>
              </Alert>
            ) : (
              <Alert variant="danger">No result returned for {postcode}</Alert>
            )}
          </Col>
          <Grid className="child-base">
            {validPostcode ? resultSet(storeData) : noResult()}
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};

/**
 * Formats opening hours
 * presented to user.
 * @param {*} data
 */
const formatOpeningHours = (data) => {
  let result = [];
  for (let key of Object.keys(data)) {
    result.push(
      `${key.charAt(0).toUpperCase() + key.slice(1)} - ${
        data[key].start_time
      } - ${data[key].end_time} \n`
    );
  }
  return result;
};

Store.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      store_code: PropTypes.string.isRequired,
      open_status: PropTypes.string.isRequired,
      store_type: PropTypes.string.isRequired,
      store_distance: PropTypes.string.isRequired,
      store_name: PropTypes.string.isRequired,
      contact: PropTypes.shape({
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string,
        city: PropTypes.string.isRequired,
        country: PropTypes.string,
        manager: PropTypes.string.isRequired,
        post_code: PropTypes.string.isRequired,
        telephone: PropTypes.string
      })
    })
  )
};

export default Store;
