module.exports = ({ httpConnector, dbConnector }) => {
  const createInvitation = body => httpConnector.createUserInvitation(body);

  return {
    createInvitation: createInvitation
  };
};
