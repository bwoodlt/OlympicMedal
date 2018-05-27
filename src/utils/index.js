import React from "react";
import _ from "lodash";
import Faker from "faker";
import Flag from "react-flags";

const basePath = "";

/**
 * For generating some test data
 */
const generateData = noOfItems => {
  let result = [];
  const count = noOfItems || 20;
  _.times(count, i => {
    result.push({
      flag: Faker.address.countryCode(),
      id: i,
      name: Faker.name.findName(),
      country: Faker.address.country(),
      medalWon: Faker.random.number()
    });
  });
  return result;
};

const FlagComponent = (cell, row) => {
  return (
    <div>
      <Flag name={cell} format="png" pngSize={64} shinny />
    </div>
  );
};

export { generateData, FlagComponent };
