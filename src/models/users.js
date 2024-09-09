import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpires: Date,
    verifyToken: String,
    verifyExpires: Date,
  },
  {
    timestamps: true,
  }
);

const Users = models.users || model("users", userSchema);

export default Users;
