const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("order", OrdersSchema);


module.exports = OrdersModel;

// const { model } = require("mongoose");

// const { OrdersSchema } = require('../schemas/OrdersSchema');

// const OrdersModel = new model("order", OrdersModel);

// module.exports = { OrdersModel };