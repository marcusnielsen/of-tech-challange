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
    expect(result).toEqual({
      _id: "fake-id",
      toTest: {
        body: { authId: "authId", email: "email" },
        method: "create",
        query: { authId: "authId" }
      }
    });
  });
});

test("make", () => {
  const service = makeService();
  const connector = make({ service: service });

  const query = { authId: "authId" };
  const body = {
    authId: "authId",
    email: "email"
  };

  connector.user.create(query)(body).then(result => {
    expect(result).toEqual({
      _id: "fake-id",
      toTest: {
        body: { authId: "authId", email: "email" },
        method: "create",
        query: { authId: "authId" }
      }
    });
  });
});
