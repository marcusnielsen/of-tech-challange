const endpoints = require("./endpoints");

const effect = ({ endpoint, method, body }) =>
  Promise.resolve(endpoint[method](body));

module.exports = () => ({
  effect: effect,
  endpoints: endpoints
});
