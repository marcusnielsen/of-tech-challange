const rp = require("request-promise");
const endpoints = require("./endpoints");

const effect = ({ method, endpoint, body }) => {
  rp({
    method: method,
    uri: endpoint,
    body: body
  });
};

module.exports = () => ({
  effect: effect,
  endpoints: endpoints
});
