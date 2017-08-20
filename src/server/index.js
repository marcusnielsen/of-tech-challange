const emptyJson = [];

const makeRespond = res => status => body => {
  res.status(status).json(body);
};
