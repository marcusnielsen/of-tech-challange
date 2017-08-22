const makeRespond = require("./make-respond");
const statusCodes = require("./status-codes");
// @TODO: Make work without mocks.
const {
  make: makeDbConnector,
  mockService: dbService
} = require("../connectors/db");
const {
  make: makeHttpConnector,
  mockService: httpService
} = require("../connectors/http");
const { makeModel: makeShopModel } = require("../modules/shop");

module.exports = () => {
  const connectors = {
    db: makeDbConnector({ service: dbService() }),
    http: makeHttpConnector({ service: httpService() })
  };

  const models = {
    shop: makeShopModel()
  };

  return {
    connectors: connectors,
    models: models,
    makeRespond: makeRespond,
    statusCodes: statusCodes
  };
};
