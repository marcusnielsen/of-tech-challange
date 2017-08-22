const makeContext = require("./context");
const { makeModule: makeUserModule } = require("../modules/user");

const emptyJson = [];

module.exports = ({ processEnv, server }) => {
  const context = makeContext();
  const userModule = makeUserModule(context);

  server.get("/", (req, res) => {
    res.json({ foo: "Quack!" });
  });

  server.post("/create-invite", userModule.controller.invite);

  // @TODO: Use processEnv to initialise a config object and use config.port instead of port 3000
  server.listen(3000, () => {
    console.log("server listening");
  });

  return server;
};
