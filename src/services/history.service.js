const HistoryModel = require("../models/History.model");

const dbHistory = async ( newHistory ) => {
    return await HistoryModel.create( newHistory );
}

const dbGetHistory = async () => {
    return await HistoryModel.find().populate(['productsList','userId']);
}

const dbGetHistoryById = async ( _id ) => {
    return await HistoryModel.findOne({ _id }).populate(['userId', 'productsList']);
}

const dbUpdateHistory = async ( id, updatedProduct ) => {
    return await HistoryModel.findOneAndUpdate(
        { _id: id },        
        updatedProduct,    
        { new: true }       
    );
}

const dbDeleteHistory = async ( id ) => {
    return await HistoryModel.findByIdAndDelete( id ).populate(['userId', 'productsList']);
}

module.exports = {
    dbHistory,
    dbGetHistory,
    dbGetHistoryById,
    dbUpdateHistory,
    dbDeleteHistory
}