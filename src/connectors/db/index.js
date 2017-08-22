const dbService = require("./db-service");
const mockService = require("./mock-service");

const makeCreate = effect => endpoint => methods => query => body =>
  effect({ method: methods.create, endpoint: endpoint(query), body: body });

const makeCreateUser = service =>
  makeCreate(service.effect)(service.endpoints.user)(service.methods);

const make = ({ service }) => {
  const createUser = makeCreateUser(service);

  const user = { create: createUser };

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
  mockService: mockService,
  toTest: toTest
};
