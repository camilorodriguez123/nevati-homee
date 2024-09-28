const WishListModel = require("../models/WishList.model")

const dbInsertWishList = async ( newWishList  ) => {
    console.log(newWishList)
    return await WishListModel.create( newWishList );
}
const dbGetWishList = async () => {
    return await WishListModel.find().populate(['wishList','userId']);
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
module.exports={
    dbInsertWishList,
    dbGetWishList,
    dbUpdateWishList,
    dbDeleteWishList
};