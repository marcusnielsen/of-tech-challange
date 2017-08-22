module.exports = {
  user: query => method => body =>
    Object.assign(
      {},
      { _id: "fake-id", toTest: { body: body, query: query, method: method } }
    )
};
