const coinsRouter = require("express").Router();
const {
    getCoins,
    getCoin
  } = require("./coins.controller");

coinsRouter.route("/coins").get(getCoins);
coinsRouter.route("/coin").get(getCoin)

module.exports = coinsRouter;
