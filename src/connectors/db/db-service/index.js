const mongoose = require("mongoose");
const makeEndpoints = require("./endpoints");
const methods = require("./methods");

// @TODO: Normalise Promise results from exec()
const effect = ({ method, endpoint, body }) =>
  endpoint.model[method.fn](endpoint.query, body, method.options).exec();

module.exports = ({ connectionString }) => {
  mongoose.connect(connectionString);
  return {
    effect: effect,
    endpoints: makeEndpoints(),
    methods: methods
  };
};
