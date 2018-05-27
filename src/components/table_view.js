import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { TableHeaderColumn, BootstrapTable } from "react-bootstrap-table";
import { FlagComponent } from "../utils";

const tableStyle = {
  paddingLeft: 20,
  paddingRight: 20
};
let order = "desc";

class TableView extends React.Component {
  constructor() {
    super();
    this.edit = this.edit.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.options = {
      defaultSortName: "country",
      defaultSortOrder: "desc"
    };
  }
  /**
   * For editing the cell
   */
  edit() {
    return {
      mode: "dbclick",
      blurToSave: true
    };
  }

  /**
   * Sorting table {Ascending/Descending}
   */
  handleSorting = () => {
    if (order === "desc") {
      this.tableRef.handleSort("asc", "medalWon");
      order = "asc";
    } else {
      this.tableRef.handleSort("desc", "medalWon");
      order = "desc";
    }
  };

  render() {
    const selectItem = {
      mode: "checkbox"
    };

    const { data, tableTitle } = this.props;
    return (
      <div>
        <h2>{tableTitle}</h2>
        <div style={tableStyle}>
          <Button bsStyle="info" onClick={this.handleSorting}>
            Sort Country by Medal Won
          </Button>
          <BootstrapTable
            data={data}
            cellEdit={this.edit()}
            striped
            hover
            insertRow
            deleteRow
            options={this.options}
            selectRow={selectItem}
            headerStyle={{ paddingTop: 10 }}
            ref={node => (this.tableRef = node)}
          >
            <TableHeaderColumn
              dataField="flag"
              dataAlign="center"
              headerAlign="center"
              dataSort
              width="10%"
              dataFormat={FlagComponent}
            >
              Flag
            </TableHeaderColumn>
            <TableHeaderColumn
              isKey
              dataSort
              dataField="id"
              dataAlign="center"
              width="15%"
            >
              ID
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="name"
              dataSort
              dataAlign="center"
              width="25%"
            >
              Name
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="country"
              dataAlign="center"
              dataSort
              width="25%"
            >
              Country
            </TableHeaderColumn>
            <TableHeaderColumn dataField="medalWon" dataSort dataAlign="center">
              Medal Won
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

TableView.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ).isRequired
};
export default TableView;
