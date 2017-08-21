const methods = require("../methods");

const createInvitation = body =>
  Object.assign(
    {},
    { data: { authId: "auth-id-mock", invitationId: "invitation-id-mock" } },
    { mockBody: body }
  );

module.exports = {
  user: {
    invitation: () => ({
      [methods.create]: createInvitation
    })
  }
};
