// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require("./schema.js");
// const Temple = require("./templeschema.js");
// const app = express();
// const PORT = process.env.PORT || 5000;
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/userdata', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Check if the connection is successful
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });


// app.post("/signup", async (req, res, next) => {
//     const { username, password, email } = req.body; // Destructure username, password, and email from req.body
//     try {
//         const newUser = new User({ username, password, email }); // Create a new user instance with username, password, and email
//         await newUser.save(); // Save the user to the database
//         console.log("New user created:", newUser); // Log the newly created user
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error("Error creating user:", error); // Log any errors
//         res.status(400).json({ message: "Error creating user"});
// }
// });


  
// app.post('/login', async (req, res, next) => {
//     const { username, password } = req.body.formData;
//     try {
//       const user = await User.findOne({ username });
//       if (!user) {
//         return res.json('not');
//       } else {
//         if (user.password === password) {
//           return res.json('succ');
//         } else {
//           return res.json('inv');
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ error: 'internal error'});
// }
// });

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Destination folder for storing uploaded images
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Use the original filename
//     }
// });

// const upload = multer({ storage: storage });

// // Route to handle temple creation with image upload
// app.post('/temple', upload.single('templeImage'), async (req, res) => {
//     try {
//         // Extract temple details from the request body
//         const { name, country, state, city, location, description } = req.body;
//         const imageName=req.file.filename;

//         // Create a new Temple instance
//         const temple = new Temple({
//             name,
//             country,
//             state,
//             city,
//             location,
//             description,
//             image: imageName
//         });

//         // Save the temple document to the database
//         const newTemple = await temple.save();

//         // Respond with the created temple document
//         res.status(201).json(newTemple);
//     } catch (error) {
//         console.error('Error adding temple:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//    }
// });

// app.post('/verify', async (req, res,next) => {
//   const { country, state, city } = req.body;
//   console.log(country);
//   try {
//     const templeDetails = await Temple.find({ country,state,city}).limit(10);
//     if (templeDetails.length > 0) {
      
//       res.json({ success: true, templeDetails });
//       console.log(templeDetails);
//     } else {
//       res.status(404).json({ success: false, message: "Temple details not found" });
//     }
//   } catch (error) {
//     console.error("Error fetching temple details:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });




// // Start server
// app.listen(PORT, () => {
//   console.log('Server is running on port ${PORT}');
// });




const express = require('express');
const session = require("express-session");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require("./schema.js");
const Temple = require("./templeschema.js");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
// Middleware`
app.use(bodyParser.json());

// Connect to MongoDB

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
mongoose.connect('mongodb://0.0.0.0:27017/userdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const authMiddleware = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};


app.post("/signup", async (req, res, next) => {
    const { username, password, email } = req.body; // Destructure username, password, and email from req.body
    try {
        const newUser = new User({ username, password, email }); // Create a new user instance with username, password, and email
        await newUser.save(); // Save the user to the database
        console.log("New user created:", newUser); // Log the newly created user
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error); // Log any errors
        res.status(400).json({ message: "Error creating user"});
}
});

  
app.post('/login', async (req, res, next) => {
    const { username, password } = req.body.formData;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.json('not');
      } else {
        if (user.password === password) {
          return res.json('succ');
        } else {
          return res.json('inv');
        }
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'internal error'});
}
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for storing uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    }
});

const upload = multer({ storage: storage });

// Route to handle temple creation with image upload
app.post('/temple', upload.single('templeImage'), async (req, res) => {
    try {
        // Extract temple details from the request body
        const { name, country, state, city, location, description } = req.body;
        const imageName=req.file.filename;

        // Create a new Temple instance
        const temple = new Temple({
            name,
            country,
            state,
            city,
            location,
            description,
            image: imageName
        });

        // Save the temple document to the database
        const newTemple = await temple.save();

        // Respond with the created temple document
        res.status(201).json(newTemple);
    } catch (error) {
        console.error('Error adding temple:', error);
        res.status(500).json({ error: 'Internal Server Error'});
   }
});

app.post('/verify', async (req, res,next) => {
  const { country, state, city } = req.body;
  console.log(country);
  try {
    const templeDetails = await Temple.find({ country,state,city});
    if (templeDetails.length > 0) {
      
      res.json({ success: true, templeDetails });
      console.log(templeDetails);
    } else {
      res.status(404).json({ success: false, message: "Temple details not found" });
    }
  } catch (error) {
    console.error("Error fetching temple details:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});




// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
