module.exports = {
  create: {
    fn: "findOneAndUpdate",
    options: {
      upsert: true,
      new: true
    }
  }
};
