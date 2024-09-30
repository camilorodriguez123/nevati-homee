const { dbHistory, dbGetHistoryById, dbDeleteHistory }= require('../services/history.service');


async function createHistory( req, res ) {
    const payload = req.authUser;
    const inputData = req.body;
    console.log( inputData );      

    inputData.userId = payload.id;

    try {
        const data = await dbHistory( inputData );

    
        res.status( 201 ).json({
            ok: true,
            data           
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear un historial'
        })
    }
}

async function getHistoryById( req, res ) {
    const historyId = req.params.id;

    try {
        const data = await dbGetHistoryById( historyId );

        if( ! data ) {
            res.status( 404 ).json({
                ok: false,
                msg: 'Historial no encontrado'
            });
        } 

        res.status( 200 ).json({
            ok: true,
            data
        });
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al obtener un historial por ID'
        })  
    }

}

async function deleteHistory( req, res ) {
    const historyId = req.params.id;

    try {
        const data = await dbDeleteHistory( historyId );

        res.status( 200 ).json({
            ok: true,
            data
        });    
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al eliminar un historial por ID'
        })
    }

    
}



module.exports = {
    createHistory,
    getHistoryById,
    deleteHistory
}
    