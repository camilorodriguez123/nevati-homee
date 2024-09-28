const { dbInsertWishList, dbGetWishList } = require('../services/wishlist.service');

async function insertWishList( req, res ) {
    const payload = req.authUser;
    const inputData = req.body;
    console.log( inputData );       // Testing

    inputData.userId = payload.id;

    try {
        const data = await dbInsertWishList( inputData );
        console.log( data );            // Testing
    
        res.status( 201 ).json({
            ok: true,
            data           // ECMAScript data: data ---> data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al insertar el producto a la lista de deseos '
        })
    }

}
async function GetWishList( req, res ) {
    /** ! TODO: Obtener los productos paginados */
    try {
        const data = await dbGetWishList();

        res.status( 200 ).json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener todos los productos de la lista de deseos'
        });
    }
}
module.exports = {
    insertWishList,
    GetWishList
};