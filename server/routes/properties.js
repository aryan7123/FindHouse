import express from "express";
import Properties from "../models/properties.js";
import multer from "multer";
import path from "path";

const propertyRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

propertyRouter.post("/create", upload.array("images"), async (req, res) => {
  try {
    const {
      property_title,
      property_id,
      property_type,
      status,
      description,
      price,
      area,
      state,
      city,
      country,
      zip,
      address,
      rooms,
      bathrooms,
      bedrooms,
      garage,
      garage_size,
      year_built,
      amenities,
    } = req.body;

    const imageUrls = req.files.map((file) => file.path);

    const newProperty = new Properties({
      property_title: property_title,
      property_id: property_id,
      property_type: property_type,
      status: status,
      description: description,
      price: price,
      area: area,
      location: [
        {
          address: address,
          country: country,
          state: state,
          city: city,
          zip: zip,
        },
      ],
      rooms: rooms,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      garage: garage,
      garage_size: garage_size,
      year_built: year_built,
      amenities: [amenities],
      images: imageUrls,
    });

    const saveProperty = await newProperty.save();
    if (saveProperty) {
      res.status(200).json({ message: "Property added successfully" });
    } else {
      res.status(200).json({ message: "Property is not added" });
    }
  } catch (error) {
    console.error(error);
  }
});

propertyRouter.get("/fetch", async (req, res) => {
  try {
    const getProperty = await Properties.find();
    res.status(200).json({ property: getProperty });
  } catch (error) {
    console.error(error);
  }
});


export default propertyRouter;
