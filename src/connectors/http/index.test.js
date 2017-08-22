// Note: functional test and unit test overlap so much right now, we don't need the unit test.
// it will make more sense if we add more units.

const { toTest, mockService: service } = require("./index");

const { makeCreateInvitation, make } = toTest;

test("makeCreateInvitation", () => {
  const body = { email: "mock@example.com", shopId: "mock-shop-id" };
  const createInvitation = makeCreateInvitation(service());

  return createInvitation(body).then(result => {
    expect(result).toEqual({
      data: { authId: "auth-id-mock", invitationId: "invitation-id-mock" },
      mockBody: { email: "mock@example.com", shopId: "mock-shop-id" }
    });
  });
});

test("make", () => {
  const body = { email: "mock@example.com", shopId: "mock-shop-id" };
  const httpConnector = make({ service: service() });

  return httpConnector.user.createInvitation(body).then(result => {
    expect(result).toEqual({
      data: { authId: "auth-id-mock", invitationId: "invitation-id-mock" },
      mockBody: { email: "mock@example.com", shopId: "mock-shop-id" }
    });
  });
});
