const createAdmin = require('./utils/createAdmin');


const addAdminSeed = () => {
    console.log("addAdminSeed called")
    const username = "x";
    const password = "x";
    const email = "x";
    createAdmin(username, email, password);
}

module.exports = addAdminSeed;