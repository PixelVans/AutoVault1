import mongoose  from 'mongoose';

const carListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
   
  },
  description: {
    type: String,
    required: true,
   
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  fueltype: {
    type: String,
  
    required: true,
  },
  transmission: {
    type: String,
  
    required: true,
  },
  condition: {
    type: String,
  
    required: true,
  },
  category: {
    type: String,
    required: true,
    // Allowed values for category
  },
  sports: {
    type: Boolean,
  
  },
  location: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  owner: {
    type: String,
   required: true,
  }
},{ timestamps: true });

const CarListing = mongoose.model('CarListing', carListingSchema);

export default CarListing;
