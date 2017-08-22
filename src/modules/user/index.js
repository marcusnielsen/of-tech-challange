const makeModel = require("./model");
const makeController = require("./controller");

const makeModule = context => {
  const { connectors, models, makeRespond, statusCodes } = context;
  const { http: httpConnector, db: dbConnector } = connectors;
  const { shop: shopModel } = models;

  const model = makeModel({
    httpConnector: httpConnector,
    dbConnector: dbConnector
  });

  const controller = makeController({
    userModel: model,
    shopModel: shopModel,
    makeRespond: makeRespond,
    statusCodes: statusCodes
  });

  return { model: model, controller: controller };
};

module.exports = {
  makeModule: makeModule
};
