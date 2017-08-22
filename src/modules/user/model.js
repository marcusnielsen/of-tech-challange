module.exports = ({ httpConnector, dbConnector }) => {
  const createInvitation = body =>
    httpConnector.user.createInvitation(body).then(invitationResponse => {
      const { authId, invitationId, email } = invitationResponse.body;
      const { status } = invitationResponse;
      // @TODO: if (status === statusCreated) {
      const createUserQuery = { authId: authId };
      const createUserBody = {
        authId: authId,
        email: email
      };
      return dbConnector.user.create(createUserQuery)(createUserBody);
    });

  return {
    createInvitation: createInvitation
  };
};
