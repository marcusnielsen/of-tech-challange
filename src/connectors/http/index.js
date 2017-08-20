const httpService = require("./http-service");
// @TODO: Create mock service

const makeCreate = effect => endpoint => body =>
  effect({ method: "POST", endpoint: endpoint, body: body });

const makeCreateUserInvitation = service => body =>
  makeCreate(service.effect)(service.endpoints.user.invitation())(body);

const make = ({ service }) => {
  const createUserInvitation = makeCreateUserInvitation(service);

  const user = { createUserInvitation: createUserInvitation };

  return {
    user: user
  };
};

const toTest = {
  makeCreateUserInvitation: makeCreateUserInvitation,
  make: make
};

module.exports = {
  make: make,
  httpService: httpService,
  toTest: toTest
};
