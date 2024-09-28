const WishListModel = require("../models/WishList.model")

const dbInsertWishList = async ( newWishList  ) => {
    console.log(newWishList)
    return await WishListModel.create( newWishList );
}
const dbGetWishList = async () => {
    return await WishListModel.find().populate(['wishList','userId']);
}
module.exports={
    dbInsertWishList,
    dbGetWishList
};