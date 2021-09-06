import * as React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormControl,
  HelpBlock,
  Label
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Toggle from "react-toggle";
import StoreData from "../data.json";

const THEME = {
  dark: {
    "--greyBg": "#525252"
  },
  light: {
    "--greyBg": "#fff"
  }
};

class StoreView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      dataset: [],
      navCollapsed: true,
      redirect: false,
      contrastMode: false,
      mode: "light",
      color: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
  }

  isNavCollapsed() {
    this.setState({ navCollapsed: !!this.state.navCollapsed });
  }

  /**
   * Fires when user postcode is valid
   * and pass search query.
   * @param {*} e
   */
  handleFormSubmit(e) {
    e.preventDefault();
    const { dataset, postcode } = this.state;

    const [code, area, listing] = Object.values(StoreData);
    dataset.push(code, area, listing);

    if (postcode.length >= 6 && postcode.length <= 8) {
      this.setState({ redirect: true });
    }
  }

  /**
   * Handles toggle change for High
   * Contrast Mode
   */

  handleToggleChange(e) {
    this.setState({ contrastMode: !this.state.contrastMode });
    this.setTheme(this.state.contrastMode);
  }

  /**
   * Sets the theme/mode selected
   * @param {*} e
   */
  setTheme(e) {
    const { mode, contrastMode } = this.state;
    this.setState({ mode: !e ? "light" : "dark" });

    Object.keys(THEME[mode]).forEach((color) => {
      this.setState({ color: THEME[mode][color] });
      document.documentElement.style.setProperty(color, THEME[mode][color]);
    });
    this.updateStorage(this.state.mode, contrastMode);
  }

  /**
   * Simple postcode validation
   */
  isValidated() {
    const { postcode } = this.state;
    const length = postcode.length;
    if (length >= 6 && length <= 8) {
      return "success";
    } else if (length > 5) {
      return "warning";
    }
    return null;
  }

  /**
   * For updating and setting local
   * storage.
   * @param {*} mode
   */
  updateStorage(mode, toggledStatus) {
    if (!window.localStorage) {
      return;
    }

    // Want to ensure localStorage is actually available and usable
    const storage = window.localStorage;
    const storedMode = storage.getItem("mode");
    const toggled = storage.getItem("toggled");
    if (storedMode === mode && toggled === toggledStatus) {
      return;
    }

    storage.setItem("mode", mode);
    storage.setItem("toggled", toggledStatus);
  }

  componentDidMount() {
    if (
      window.localStorage &&
      window.localStorage.getItem("mode") !== undefined
    ) {
      const mode = window.localStorage.getItem("mode");
      this.setTheme(mode);
    }
  }

  /**
   * Fires on when user types into
   * textfield
   * @param {*} e
   */
  handleInputChange(e) {
    const postcodeVal = e.target.value.toUpperCase();
    const postcodeRegex = /([A-Z]{1,2}[0-9]{1,2})([0-9][A-Z]{2})/i;
    this.setState({
      postcode: postcodeVal.replace(postcodeRegex, "$1, $2")
    });
  }

  render() {
    const { postcode, redirect, dataset, contrastMode } = this.state;
    const { storeTitle, placeholder } = this.props;

    return (
      <div className="clearfix" style={{ backgroundColor: this.state.color }}>
        <Row>
          <Col xs={8} md={11}>
            <h2>
              <strong>{storeTitle}</strong>
            </h2>
            <Col>
              <Form inline onSubmit={this.handleFormSubmit}>
                <FormGroup validationState={this.isValidated()}>
                  <FormControl
                    type="text"
                    value={postcode}
                    placeholder={placeholder}
                    onChange={this.handleInputChange}
                  />
                  <Button disabled={postcode.length < 6} type="submit">
                    Done
                  </Button>

                  <HelpBlock style={style.spacing}>
                    {postcode.length >= 6 &&
                    postcode.length <= 8 &&
                    postcode === "EC1N 2HT"
                      ? "Awesome, postcode looks good!"
                      : postcode.length > 3 || postcode.length >= 6
                      ? "Please enter `EC1N 2HT` to see valid results."
                      : ""}
                  </HelpBlock>
                </FormGroup>
              </Form>
              {redirect && (
                <Redirect
                  to={{
                    pathname: "/results",
                    state: { results: dataset }
                  }}
                />
              )}
            </Col>
          </Col>
          <Col xs={10} md={1} mdPull={2} className="contrastMode">
            <Label className="toggle">
              <Toggle
                checked={contrastMode}
                onChange={this.handleToggleChange}
              />
              <span className="toggleItem">
                High Contrast Mode: {contrastMode ? "ON" : "OFF"}
              </span>
            </Label>
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  spacing: {
    position: "relative",
    right: 10
  }
};
StoreView.propTypes = {
  storeTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  listingData: PropTypes.arrayOf(
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
  ).isRequired
};

export default StoreView;
