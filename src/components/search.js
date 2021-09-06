import React from "react";
import { StoreView } from "../components";
import { generateData } from "../utils";

/**
 * Performs search functionality for
 * out store finder app.
 * @param {*}
 */
const Search = () => {
  const storeTitle = "Search for Stores";
  const placeholder = "Search";

  return (
    <section>
      <StoreView
        listingData={generateData}
        storeTitle={storeTitle}
        placeholder={placeholder}
      />
    </section>
  );
};

export default Search;
