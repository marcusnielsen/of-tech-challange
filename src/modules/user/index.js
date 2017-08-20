const makeModel = require("./model");
const makeController = require("./controller");

const makeModule = ({ connector }) => {
  const model = makeModel({ connector: connector });
  const controller = makeController({ model: model });

  return { model: model, controller: controller };
};

module.exports = {
  makeModule: makeModule
};
