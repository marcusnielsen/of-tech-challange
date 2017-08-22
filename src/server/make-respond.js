module.exports = res => status => body => {
  res.status(status).json(body);
};
