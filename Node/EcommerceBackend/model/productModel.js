const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [4, "Product name must be at least 4 characters long"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be non-negative"],
  },
  discount: {
    type: Number,
    default: 0,
    validate: {
      validator: function () {
        return this.price >= this.discount;
      },
      message: "Discount cannot be more than price"
    }
  },
  description: String,
  brand: String,
  category: {
    type: String,
    default: "Miscellaneous",
    required: true
  },
  image:{
    type:String,
    default:"https://picsum.photos/200/300"
  }
}, {
  timestamps: true
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = {
    ProductModel,
};