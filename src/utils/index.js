import React from "react";
import _ from "lodash";
import Faker from "faker";
import Flag from "react-country-flag";

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

/**
 * For showing country flags
 */
const FlagComponent = (cell, row) => {
  return (
    <div>
      <Flag code={cell} />
    </div>
  );
};

export { generateData, FlagComponent };
