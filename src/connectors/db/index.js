const dbService = require("./db-service");

const makeCreate = effect => makeEndpoint => methods => query => body =>
  effect({ method: methods.create, endpoint: makeEndpoint(query), body: body });

// query => body => Promise
const makeCreateUser = service =>
  makeCreate(service.effect)(service.methods)(service.endpoints.user);

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
