const endpoints = require("./endpoints");
const methods = require("./methods");

const effect = ({ method, endpoint, body }) =>
  Promise.resolve(endpoint(method)(body));

module.exports = () => ({
  effect: effect,
  endpoints: endpoints,
  methods: methods
});
