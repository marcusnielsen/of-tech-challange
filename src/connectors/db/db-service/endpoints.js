const mongoose = require("mongoose");

// @TODO: Implement schemas
const shopSchema = { name: String };
const userSchema = { authId: String, invitationId: String };

const ShopMongooseModel = mongoose.model("Shop", shopSchema);
const UserMongooseModel = mongoose.model("User", userSchema);

module.exports = () => ({
  shop: query => ({ model: ShopMongooseModel, query: query }),
  user: query => ({ model: UserMongooseModel, query: query })
});
