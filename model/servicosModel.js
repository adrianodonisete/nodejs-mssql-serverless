
const sql = require('mssql');
const { config } = require('../config/db');


function arrayFromRecordSet(rs) {
    let arr = [];
    for (const a of rs) {
        for (const key in a) {
            arr.push(a[key])
        }
    }
    return arr;
}

module.exports.all = async () => {
    try {
        let recordSet = [];
        await sql.connect(config);
        await sql.query`SELECT TOP 200 * FROM systax_app.dbo.servicos`
            .then(result => result.recordset)
            .then(s => recordSet.push(s));
            
        return arrayFromRecordSet(recordSet); 
        
    } catch (err) {
        console.error(err);
    }
}

module.exports.execute = function (sqlQuery, callback) {
    sql.connect(config, (err) => {
        if (err) {
            console.log(err);
            callback(err);
            
        } else {
            const req = new sql.Request();
            req.query(sqlQuery, (error, result) => {
                if (error) {
                    console.log(error);
                    callback(error);
                } else {
                    console.log(result);
                    sql.close();
                    callback(null, result.recordset);
                }
            });
        }
    });

    sql.on('error', (err) => {
        console.log(err);
        callback(err);
    });
};