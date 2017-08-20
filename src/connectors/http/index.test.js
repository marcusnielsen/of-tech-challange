// @TODO: Continue here.
// @TODO: Include body in calls, and return a proper mock response.
const { toTest } = require("./index");
const service = require("./mock-service");

const { makeCreateUserInvitation, make } = toTest;

test("makeCreateUserInvitation", () => {
  const createUserInvitation = makeCreateUserInvitation(service);

  return createUserInvitation().then(result => {
    expect(result.data).toEqual([]);
  });
});

test("make", () => {
  const httpConnector = make({ service: service });

  return httpConnector.user.createUserInvitation().then(result => {
    expect(result.data).toEqual([]);
  });
});
