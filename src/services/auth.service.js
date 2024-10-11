const { encryptedPassword } = require("../helpers/bcrypt.helper");
const UserModel = require("../models/User.model");

const dbGetUserByUsername = async ( email ) => {
    return await UserModel.findOne({ username: email });
}

const dbRegisterUser = async ( newUser ) => {
    if (!newUser.username || newUser.username === '') {
        throw new Error('El email (username) no puede estar vacío');
    }

    const dbUser = new UserModel(newUser);

    const hashPassword = encryptedPassword(dbUser.password);
    dbUser.password = hashPassword;

    return await dbUser.save();
}


module.exports = {
    dbGetUserByUsername,
    dbRegisterUser
}