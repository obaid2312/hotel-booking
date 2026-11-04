import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// export const registerHotel = async (req, res) => {
//     try {
//         const {name, address, contact, city} = req.body;
//         const owner = req.user._id;

//         // check if user is already registered
//         const hotel = await Hotel.findOne({owner})
//         if (hotel) {
//         return res.json({success: false, message: "Hotel already registered"})
//         }

//         await Hotel.create({name, address, contact, city, owner});

//         await User.findByIdAndUpdate(owner, {role: "hotelOwner"});

//         res.json({success: true, message: "Hotel Registered Successfully"});
//     } catch (error) {
//        res.json({success: false, message: error.message});
//     }
// }

export const registerHotel = async (req, res) => {
  try {
    console.log("===== REGISTER HOTEL HIT =====");
    console.log("AUTH:", req.auth);
    console.log("USER:", req.user);
    console.log("BODY:", req.body);

    const owner = req.user._id;

    const hotel = await Hotel.create({
      name: req.body.name,
      address: req.body.address,
      contact: req.body.contact,
      city: req.body.city,
      owner,
    });

    console.log("HOTEL SAVED:", hotel);

    return res.json({
      success: true,
      message: "Hotel Registered Successfully",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
