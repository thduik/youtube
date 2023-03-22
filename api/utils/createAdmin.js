const User = require("../models/User");
const CryptoJS = require("crypto-js");

const createAdmin = async (username, email, password) => {
    const newUser = new User({
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.SECRET_KEY
        ).toString(),
        isAdmin: true
      });
    
      try {
        const user = await newUser.save();
        console.log("createAdminUtil Success")
        return
      } catch (err) {
        console.log("createAdminUtil error", err)
        return;
      }
}


module.exports = createAdmin;