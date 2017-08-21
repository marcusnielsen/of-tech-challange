module.exports = ({ httpConnector, dbConnector }) => {
  const createInvitation = body =>
    httpConnector.user.createInvitation(body).then(invitationResponse => {
      const { authId, invitationId } = invitationResponse.body;
      const { status } = invitationResponse;

      dbConnector.user.
    });
  return {
    createInvitation: createInvitation
  };
};
