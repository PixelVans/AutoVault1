import CarListing from "../models/ListingModel.js";







export const publicListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const searchTerm = req.query.searchTerm || '';
    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';
    let category = req.query.category || null; // Default to null if not provided
    let fueltype = req.query.fueltype || null; // Default to null if not provided
    let brand = req.query.brand || null;
    const sports = req.query.sports === 'true'; // Converts 'true' to boolean true

    // Build query object
    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        
        { condition: { $regex: searchTerm, $options: 'i' } }
      ]
    };

    if (category) {
      query.category = category;
    }
    if (brand) {
      query.brand = { $regex: brand, $options: 'i' };
    }
    if (fueltype) {
      query.fueltype = { $regex: fueltype, $options: 'i' };
    }
    if (sports) {
      query.sports = true; // Add sports to query if true
    }



    const listings = await CarListing.find(query)
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};














export const homeListings = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = parseInt(req.query.startIndex) || 0;
   
    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';
 
    const listings = await CarListing.find({  
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};














