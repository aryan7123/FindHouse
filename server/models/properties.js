import mongoose from "mongoose";

const propertyModel = new mongoose.Schema({
  property_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  property_type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  location: [
    {
      address: String,
      state: String,
      city: String,
      zip: String,
      country: String,
    },
  ],
  property_id: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  garage_size: {
    type: String,
    required: true,
  },
  year_built: {
    type: String,
    required: true,
  },
  amenities: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
});

const Properties = mongoose.model("properties", propertyModel);

export default Properties;
