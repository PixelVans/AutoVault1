import User from "../models/userModel.js"
import Stripe from "stripe";
import CarListing from "../models/ListingModel.js"
import { errorHandler } from "../utilities/error.js"
import mongoose from 'mongoose';
    export const updateUser = async (req, res, next) => {
        if (req.user.id !== req.params.id) return next(errorHandler(
            401,'You can only update your own account'
        )) 
        try {
            if (req.body.password) {
                req.body.password = bcryptjs.hashSync(req.body.password,10)
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                 }
            }, { new: true })
            
            const { password, ...rest } = updatedUser._doc
            res.status(200).json(rest);
         } catch (error){
            console.log(error)
            next(error)
           
        }
    }
    




    export const  deleteUser = async (req,res,next) => {
        if(req.user.id !== req.params.id) return next(errorHandler(401,'You can only delete your own account'))
          try {
              await User.findByIdAndDelete(req.params.id)
              res.clearCookie('access_token')
              res.status(200).json('User has been deleted')
          }
          catch (error) {
              next(error)
          }
      
      }



export const createCarListing = async (req, res, next) => {
   

    try {
        const listing = await CarListing.create(req.body);
        return res.status(201).json(listing); 
    } catch (error) {
        next(error); 
    } 
}
      

export const myListings = async (req, res, next) => {
    // if (req.user.id !== req.params.id.toString()) return next(errorHandler(
    //     401,'Sign In to create a Listing'
    // )) 
    try {
        
        const listing = await CarListing.find({owner: req.params.id});
        if (!listing) {
            return next(errorHandler(404, "Listing not found"))
          }
     res.status(200).json( listing);
    } catch (error) {
        next(error); 
    }
}




export const deleteCarListing = async (req, res, next) => {

   
    const listing = await CarListing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, "Listing not found"))
      }     
    
    if (req.user.id !== listing.owner) {
        return next(errorHandler(401, "You can only delete your own listings!"))
           
    }
    

    try {
        await CarListing.findByIdAndDelete(req.params.id);
     res.status(200).json( "Listing deleted successfully" );
    } catch (error) {
        next(error); 
    }

}


export const updateUserListing = async (req, res, next) => {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(errorHandler(400, "Invalid ID format"));
    }

    try {
        // Find the listing
        const listing = await CarListing.findById(id);
        if (!listing) {
            return next(errorHandler(404, "Listing not found"));
        }

        // Check ownership
        if (req.user.id !== listing.owner.toString()) {
            return next(errorHandler(401, "You can only update your own listings!"));
        }

        // Update the listing
        const updatedListing = await CarListing.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedListing);
    } catch (error) {
        next(error);
    }
}





export const getListing = async (req, res, next) => {
   
    try {
        
        const listing = await CarListing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, "Listing not found"))
          }
     res.status(200).json( listing);
    } catch (error) {
        next(error); 
    }
}


export const getOwner = async (req, res, next) => { 
    
    try {
        const owner = await User.findById(req.params.id);
        if (!owner) return next(errorHandler(404, 'owner not found'))
        const { password: pass, ...rest } = owner._doc;
        res.status(200).json(rest);
        
    } catch (error) {
      next(error)
      }

}

export const reserve = async (req, res) => {
    const stripe = Stripe('sk_test_51Pz6WERoTuW6EzfZjwFKlUmITeYkGdUZvivuvJGYhgQrdkbpHf5d828JqDADSgUEqgQWdmZkkFxNdb5xt3yXavFi004Vt844yM'); 
    const { products } = req.body;
   
    // Map products to line items
    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
          images: [product.image],
        },
        unit_amount: product.price * 100, // Stripe uses cents
      },
      quantity: 1,
    }));
  
    try {
      // Create a checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5000/success', // Replace with your success URL
        cancel_url: 'http://localhost:5000/failure', // Replace with your cancel URL
      });
  
      res.json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



