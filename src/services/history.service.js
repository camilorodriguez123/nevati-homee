const HistoryModel = require("../models/History.model");

const dbHistory = async ( newHistory ) => {
    return await HistoryModel.create( newHistory );
}

const dbGetHistoryById = async ( _id ) => {
    return await HistoryModel.findOne({ _id }).populate('userId').populate('productsList');
}

const dbDeleteHistory = async ( id ) => {
    return await HistoryModel.findByIdAndDelete( id ).populate('userId').populate('productsList');
}

module.exports = {
    dbHistory,
    dbGetHistoryById,
    dbDeleteHistory
}