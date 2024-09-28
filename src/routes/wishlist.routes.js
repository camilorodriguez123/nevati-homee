const express = require( 'express' );
const { authUser } = require('../middlewares/auth-user.middleware');
const { insertWishList, GetWishList, updateWishListPatch, deleteWishList } = require('../controllers/wishlist.controller');
const router = express.Router();


router.post( '/', authUser ,insertWishList);           // inserta un procto a la lista de deseos 
router.get( '/', GetWishList);                         // muestra todos los productos en la lista de deseos 

router.patch( '/:id', authUser, updateWishListPatch);    // Actualiza parcialmente los campos de un producto
router.delete( '/:id', authUser, deleteWishList ); 

module.exports = router;