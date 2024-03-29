import React from "react";
import { times } from "lodash";
import Faker from "faker";
import Flag from "react-country-flag";

/**
 * For showing country flags
 */
const FlagComponent = (cell, row) => {
  return <Flag code={cell} />;
};

/**
 * For generating test data for
 * the store - mainly for writing
 * tests
 */
const generateData = times(5, () => {
  return {
    store_code: Faker.random.number().toString(),
    open_status: Faker.random.word(),
    store_type: Faker.random.boolean().toString(),
    store_distance: Faker.random.number().toString(),
    store_name: Faker.commerce.department(),
    contact: {
      address1: Faker.address.streetName(),
      city: Faker.address.city(),
      country: Faker.address.country(),
      manager: Faker.name.findName(),
      post_code: Faker.address.zipCode(),
      telephone: Faker.phone.phoneNumber()
    }
  };
});

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

const getPostCodeAddressInfo = async (postcode) => {
  const url = `https://api.postcodes.io/postcodes/${encodeURIComponent(
    postcode
  )}`;
  return fetchData(url);
};

const getSainsburysStoreListing = async (longitude, latitude) => {
  const url = `https://stores.sainsburys.co.uk/list/place/@${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;
  const result = await fetchData(url);
  console.log({ ok_res: result });
  return result;
};

export {
  generateData,
  FlagComponent,
  getPostCodeAddressInfo,
  getSainsburysStoreListing
};
