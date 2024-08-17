import CarListing from "../models/ListingModel.js";











export const publicListings = async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
      const searchTerm = req.query.searchTerm || '';
      const sort = req.query.sort || 'createdAt';
      const order = req.query.order === 'asc' ? 1 : -1;
      
      let sportsFilter = {};
      if (req.query.sports === 'true') {
        sportsFilter.sports = true;
      }
      else if (req.query.sports === 'false') {
        sportsFilter.sports = false;
      }
      // Modify the query to search across multiple fields
      const listings = await CarListing.find({
        $or: [
          { title: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { fueltype: { $regex: searchTerm, $options: 'i' } },
          { condition: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
          
        ],
        ...sportsFilter,
      })
        .sort({ [sort]: order })
        .limit(limit)
        .skip(startIndex);
  
      return res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  };
  

