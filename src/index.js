import React from "react";
import { render } from "react-dom";
import { Navbar, TopSection, TableView } from "./components";
import { generateData } from "./utils";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const title = "Olympic Medals Table";
const tableTitle = "Olympic Medal Table";
const description =
  "For displaying the Olympic medal table including sorting by ASC and DESC order, adding new row and showing list of countries.";

const App = () => {
  return (
    <div style={styles}>
      <Navbar />
      <TopSection title={title} description={description} />
      <TableView data={generateData(20)} tableTitle={tableTitle} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
