const makeServer = require("./index");

const makeExpressServer = () => ({
  get: () => null,
  post: () => null,
  listen: () => null
});

test("makeServer", () => {
  const server = makeServer({ processEnv: null, server: makeExpressServer() });

  expect(server).toEqual(1);
});
