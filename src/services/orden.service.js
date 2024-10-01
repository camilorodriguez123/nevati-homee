const OrderModel = require("../models/orden.model");


const dbInsertOrder = async ( newWishList  ) => {
    console.log(newWishList)
    return await OrderModel.create( newWishList );
}
const dbGetOrder = async () => {
    return await OrderModel.find().populate(['userId']).populate({
        path: 'carts', // Poblar el carrito
        populate: {
            path: 'products.product', // Ahora poblas los productos dentro del carrito
            model: 'products' // Asegúrate de que este sea el nombre correcto de tu modelo de productos
        }
    });
}
const dbGetOrderById = async ( _id ) => {
    return await OrderModel.findOne({ _id }).populate(['userId','carts']);
}
const dbUpdateOrder = async ( id, updatedProduct ) => {
    return await OrderModel.findOneAndUpdate(
        { _id: id },        // Objeto de consulta
        updatedProduct,     // Objeto con las propiedades y valores a actualizar
        { new: true }       // Configurando la salida de la consulta
    );
}

const dbDeleteOrder = async ( id ) => {
    return await OrderModel.findByIdAndDelete( id ).populate(['userId','carts']);
}
module.exports={
    dbInsertOrder,
    dbGetOrder,
    dbGetOrderById,
    dbUpdateOrder,
    dbDeleteOrder
};