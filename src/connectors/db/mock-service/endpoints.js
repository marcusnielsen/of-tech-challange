module.exports = {
  user: query => method => body =>
    Object.assign({}, { body: body, query: query, method: method })
};
