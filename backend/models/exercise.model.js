const mongoose = require("mongoose");
const argon2 = require('argon2');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    role: { type: String, required: true },
    idBadge: { type: Number, required: true },
    password:{type: String, required: true},
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

exerciseSchema.pre('save', async function(){
  if (this.isModified('password')){
    this.password = await argon2.hash(this.password);
  }
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
