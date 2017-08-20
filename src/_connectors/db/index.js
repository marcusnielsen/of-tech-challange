const mongoose = require("mongoose");
const endpoints = require("./endpoints");

// @TODO: Implement
const create = endpoint => body => {};

module.exports = () => {
  // @TODO: connection string.
  mongoose.connect();
  return {
    create: create,
    endpoints: endpoints
  };
};
