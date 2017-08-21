const mongoose = require("mongoose");
const endpoints = require("./endpoints");
const methods = require("./methods");

const effect = ({ method, endpoint, body }) =>
  endpoint.model[method.fn](endpoint.query, body, method.options).exec();

module.exports = ({ connectionString }) => {
  mongoose.connect(connectionString);
  return {
    effect: effect,
    endpoints: endpoints,
    methods: methods
  };
};
