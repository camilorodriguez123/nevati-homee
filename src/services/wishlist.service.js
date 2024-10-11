const WishListModel = require("../models/WishList.model");
const ProductModel = require('../models/Product.model');

const dbInsertWishList = async ( newWishList  ) => {
    return await WishListModel.create( newWishList );
}
const dbGetWishList = async () => {
    return await WishListModel.find().populate('userId').populate('wishList');
}
const dbGetWishListById = async ( _id ) => {
    return await WishListModel.findOne({ _id });
}
const dbUpdateWishList = async ( id, updatedProduct ) => {
    return await WishListModel.findOneAndUpdate(
        { _id: id },        // Objeto de consulta
        updatedProduct,     // Objeto con las propiedades y valores a actualizar
        { new: true }       // Configurando la salida de la consulta
    );
}

const dbDeleteWishList = async ( id ) => {
    return await WishListModel.findByIdAndDelete( id );
}

const findProductInWishList = async (searchParams) => {

};

module.exports={
    dbInsertWishList,
    dbGetWishList,
    dbGetWishListById,
    dbUpdateWishList,
    dbDeleteWishList,
    findProductInWishList
};