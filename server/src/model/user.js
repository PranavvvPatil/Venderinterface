const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    fullname:{
      type: String,
      required: [true, "Please enter your Name!"],
    },
    username:{
      type: String,
      required: [true,"Please enter your User Name!"],
      uniqe:true,
    },
    email:{
      type: String,
      required: [true, "Please enter your email!"],
    },
    googleId: {
      type: String, // Unique Google ID for Google OAuth
      required: false,
    },
    password:{
      type: String,
      required: [true, "Please enter your password"],
      minLength: [4, "Password should be greater than 4 characters"],
      select: false,
    },
    phoneNumber:{
      type: Number,
    },
    addresses:[
      {
        country: {
          type: String,
        },
        city:{
          type: String,
        },
        address1:{
          type: String,
        },
        address2:{
          type: String,
        },
        zipCode:{
          type: Number,
        },
        addressType:{
          type: String,
        },
      }
    ],
    role:{
      type: String,
      default: "user",
    },
    avatar:{
      public_id: {
        type: String,
        required: function () {
            return !!this.avatar?.url; // Require if 'url' is present
          },
      },
      url: {
        type: String,
        required: function () {
            return !!this.avatar?.public_id; // Require if 'public_id' is present
          },
      },
   },
   createdAt:{
    type: Date,
    default: Date.now(),
   },
   //resetPasswordToken: String,
   //resetPasswordTime: Date,
  });


  const User = mongoose.model("User", userSchema);


  // Test user insertion function
const insertTestUser = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    // Check if the test user already exists
    const existingUser = await User.findOne({ email: "testuser@example.com" });
    if (existingUser) {
      console.log("Test user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("testing", 10);

    // Create and save the test user
    const testUser = new User({
      name: "Test User",
      email: "testuser@example.com",
      password: hashedPassword,
      phoneNumber: 1234567890,
      addresses: [
        {
          country: "Test Country",
          city: "Test City",
          address1: "123 Test St.",
          address2: "",
          zipCode: 12345,
          addressType: "Home",
        },
      ],
      role: "user",
      createdAt: new Date(),
    });

    const savedUser = await testUser.save();
    console.log("Test user created:", savedUser);
  } catch (error) {
    console.error("Error creating test user:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Uncomment the line below to insert the test user
//insertTestUser();

// module.exports = mongoose.model("User", userSchema);
module.exports = User;