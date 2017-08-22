const { toTest, mockService: makeService } = require("./index");

const { makeCreateUser, make } = toTest;

test("makeCreateUser", () => {
  const service = makeService();

  const query = { authId: "authId" };
  const body = {
    authId: "authId",
    email: "email"
  };
  const createUser = makeCreateUser(service);

  return createUser(query)(body).then(result => {
    // @TODO: Set real expectations, and update endpoint.
    expect(result).toEqual({
      body: { authId: "authId", email: "email" },
      method: "create",
      query: { authId: "authId" }
    });
  });
});
