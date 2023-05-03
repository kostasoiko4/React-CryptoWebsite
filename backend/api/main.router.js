const mainRouter = require("express").Router();

const coinsRouter = require("./coins/coins.router")

mainRouter.use("/coins", coinsRouter);

module.exports = coinsRouter;
