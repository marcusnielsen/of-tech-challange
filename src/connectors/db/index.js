const dbService = require("./db-service");

const makeCreate = effect => makeEndpoint => methods => query => body =>
  effect({ method: methods.create, endpoint: makeEndpoint(query), body: body });

const makeCreateUser = service => query => body =>
  makeCreate(service.effect)(service.methods)(service.endpoints.user)(query)(
    body
  );

const make = ({ service }) => {
  const createUser = makeCreateUser(service);

  const user = { createUser: createUser };

  return {
    user: user
  };
};

const toTest = {
  makeCreateUser: makeCreateUser,
  make: make
};

module.exports = {
  make: make,
  dbService: dbService,
  toTest: toTest
};
