const User = require("../../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
    const { fullname, username, email, password } = req.body;
    //console.log("Request body:", req.body);
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
      const existingUserName = await User.findOne({username});
      if(existingUserName){
        return res.status(400).json({error: "User Name is already taken"})
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ fullname, username, email, password: hashedPassword });
      await newUser.save();
  
      // Generate JWT Token
      const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY , {
        expiresIn: "1d",
      });
  
      // Set token in cookies
      const options = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
        httpOnly: true,
        sameSite: "none", // Adjust based on your frontend deployment
        secure: false, // Set true for HTTPS(Production)
      };
  
      // Send response with token and user details
      res.status(201).cookie("token", token, options).json({
        success: true,
        message: "User registered successfully",
        user: newUser,
        token,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error registering user" });
    }
  };
  
  const login = async (req, res, next) => {
    const { email, password } = req.body;
    //console.log("Request body:", req.body);
  
    try {
      // Find user by email
      const user = await User.findOne({ email }).select('+password');
//      console.log('User Object:', user);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Compare passwords
//      console.log('Password:', password);
//      console.log('Hashed Password:', user.password);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
  
      // Set token in cookies
      const options = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
        httpOnly: true,
        sameSite: "none", // Adjust based on your frontend deployment
        secure: false, // Set true for HTTPS(Production)
      };
  
      // Send response with token and user details
      res.status(200).cookie("token", token, options).json({
        success: true,
        message: "Login successful",
        user,
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error logging in" });
    }
  };

  // Google Login/Register
  const googleAuth = async (req, res, next) => {
    const { token } = req.body;
  
    try {
      // Verify the Google token
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const payload = ticket.getPayload();
      const { sub: googleId, email, name, picture: avatarUrl } = payload;
  
      // Check if user already exists
      let user = await User.findOne({ email });
  
      if (!user) {
        // Register the user if not exists
        user = await User.create({
          googleId,
          email,
          name,
          avatar: { url: avatarUrl },
        });
      }
  
      // Generate JWT Token
      const jwtToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
  
      const options = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
        httpOnly: true,
        sameSite: "none",
        secure: false,
      };
  
      res.status(200).cookie("token", jwtToken, options).json({
        success: true,
        message: "Google Authentication Successful",
        user,
        token: jwtToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Google Authentication Failed" });
    }
  };
  
  module.exports = { login, register, googleAuth };