const httpService = require("./http-service");
const mockService = require("./mock-service");
const methods = require("./methods");

const makeCreate = effect => endpoint => body =>
  effect({ method: methods.create, endpoint: endpoint, body: body });

const makeCreateInvitation = service => body =>
  makeCreate(service.effect)(service.endpoints.user.invitation())(body);

const make = ({ service }) => {
  const createInvitation = makeCreateInvitation(service);

  const user = { createInvitation: createInvitation };

  return {
    user: user
  };
};

const toTest = {
  makeCreateInvitation: makeCreateInvitation,
  make: make
};

module.exports = {
  make: make,
  httpService: httpService,
  mockService: mockService,
  toTest: toTest
};
