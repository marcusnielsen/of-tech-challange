const endpoints = require("./endpoints");

const effect = ({ endpoint }) => Promise.resolve(endpoint);

module.exports = {
  effect: effect,
  endpoints: endpoints
};
