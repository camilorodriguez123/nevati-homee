const CartModel = require("../models/Cart.model");
const ProductModel = require('../models/Product.model');

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
    return await CartModel.findOne({ _id }).populate(['userId']).populate({
        path: 'products.product', 
        model: 'products'
    });
}

const dbUpdateCart = async ( id, updatedProduct ) => {
    return await CartModel.findOneAndUpdate(
        { _id: id },        
        updatedProduct,    
        { new: true }       
    );
}

const dbDeleteCart = async ( id ) => {
    return await CartModel.findByIdAndDelete( id ).populate(['userId']).populate({
        path: 'products.product', 
        model: 'products'
    });
}
const findProductInCart = async (userId, productName) => {
    const cart = await CartModel.findOne({ userId }).populate('products.product');
    
    if (!cart) {
        throw new Error('carro no encontrado');
    }

    const product = cart.products.find(item => item.product.name === productName);
    
    return product ? product.product : null; // Devuelve el producto o null si no se encuentra
};
module.exports = {
    dbCart,
    dbGetCart,
    dbGetCartById,
    dbUpdateCart,
    dbDeleteCart,
    findProductInCart
}