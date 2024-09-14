import { model, models, Schema } from "mongoose";

const PurchaseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  itemDetails: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  purchaseDate: { type: Date, default: Date.now },
});

const Purchase = models.Purchase || model("Purchase", PurchaseSchema);
export default Purchase;
