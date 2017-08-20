const mongoose = require("mongoose");

// @TODO: Implement schemas
const shopSchema = { name: String };
const userSchema = { name: String };

const ShopMongooseModel = mongoose.model("Shop", shopSchema);
const UserMongooseModel = mongoose.model("User", userSchema);

module.exports = () => ({
  shop: () => ShopMongooseModel,
  user: () => UserMongooseModel
});
