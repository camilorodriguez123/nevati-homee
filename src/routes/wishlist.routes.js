const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { insertWishList, GetWishList, updateWishListPatch, deleteWishList, getWishListById, getProductFromWishList, getProductInWishListByName } = require('../controllers/wishlist.controller');
const router = express.Router();


router.post( '/', authUser ,insertWishList);           // inserta un procto a la lista de deseos 
router.get( '/', authUser,GetWishList);                         // muestra todos los productos en la lista de deseos 
router.get( '/:id', getWishListById);  
router.patch( '/:id', authUser,authUser,updateWishListPatch);    // Actualiza parcialmente los campos de un producto
router.delete( '/:id', authUser, authUser,deleteWishList );       // elimina la lista de deseos 
// Router para búsqueda en la lista de deseos
router.post('/wishlist/search',authUser, getProductInWishListByName);
module.exports = router;