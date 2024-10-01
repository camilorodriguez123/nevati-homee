const CartModel = require("../models/Cart.model");

const dbCart = async ( newCart ) => {
    return await CartModel.create( newCart );
}

const dbGetCart = async () => {
    return await CartModel.find().populate(['userId']).populate({
        path: 'products.product', 
        model: 'products'
    });
}

const dbGetCartById = async ( _id ) => {
    return await CartModel.findOne({ _id }).populate(['userId', 'products']);
}

const dbUpdateCart = async ( id, updatedProduct ) => {
    return await CartModel.findOneAndUpdate(
        { _id: id },        
        updatedProduct,    
        { new: true }       
    );
}

const dbDeleteCart = async ( id ) => {
    return await CartModel.findByIdAndDelete( id ).populate(['userId', 'products']);
}

module.exports = {
    dbCart,
    dbGetCart,
    dbGetCartById,
    dbUpdateCart,
    dbDeleteCart
}