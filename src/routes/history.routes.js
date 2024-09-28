const express = require( 'express' );
const router = express.Router();

const { createHistory, getHistoryById, deleteHistory } = require('../controllers/history.controller');
const { authUser } = require('../middlewares/auth-user.middleware');


router.post( '/', authUser, createHistory );            
router.get( '/:id',authUser, getHistoryById ); 
router.delete( '/:id', authUser, deleteHistory );                               


module.exports = router;