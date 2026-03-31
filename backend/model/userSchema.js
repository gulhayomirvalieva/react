const { Schema, model } = require("mongoose");
const { Car } = require("./car.Schema");
const { House } = require("./house.Schema");
const { Product } = require("./product.Schema");
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  firstname: { type: String, default: "" },
  lastname: { type: String, default: "" },
  birthday: { type: String },
  gender: { type: String, enum: ["male", "female"], alias: "jinsi" },
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
  car_id: { type: Schema.Types.ObjectId, ref: Car },
  house_id: { type: Schema.Types.ObjectId, ref: House },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
});
const User = model("user", userSchema);
module.exports = { User };

// router --> yol korsatadi || url ga sorov borishni belgilaydi
// controller --> ishni bajaradi || sorovga javob tayyorlaydi
// model --> malumot bn ishlaydi
// schema --> malumot qanday korinishda bolishi
// validation --> malumot togri ekanligini tekshiradi
// mern, (mongoose)odm, nod, orm
// cors
