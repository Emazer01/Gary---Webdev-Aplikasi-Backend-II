const { databaseQuery } = require('../database');

const getPraktikans = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getPraktikanByName = async (nama) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getPraktikanByEmailAndTelepon = async (email,telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM praktikan_webdev WHERE email='${email}' AND telepon='${telepon}'`;
        const result = await databaseQuery(query);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertPraktikan = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO praktikan_webdev VALUES ('${nama}', '${jenis_kelamin}', '${angkatan}', '${email}', '${telepon}', '${deskripsi}')`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error inserting Data');
        }
        return {
            message: 'Data inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const insertBulkPraktikan = async (POM) => {
    try {
        let BAN = []
        JSON.parse(POM,(a,b)=>{BAN.push(b)})
        for (let a=0;a<(BAN.length-1)/7;a++){
            const query = `INSERT INTO praktikan_webdev VALUES ('${BAN[a*7]}','${BAN[(a*7)+1]}','${BAN[(a*7)+2]}','${BAN[(a*7)+3]}','${BAN[(a*7)+4]}','${BAN[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error inserting Data');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
        }
        console.log(BAN)
        console.log(POM)
        return {
            message: 'Data inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deletePraktikan = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM praktikan_webdev WHERE email='${email}'`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error deleting Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updatePraktikan = async (nama, telepon) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE praktikan_webdev SET telepon='${telepon}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error deleting Data');
        }
        if (result.rowCount === 0) {
            throw new Error('Data not found');
        }
        return {
            message: 'Data updated successfully',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getPraktikans,
    getPraktikanByName,
    getPraktikanByEmailAndTelepon,
    insertPraktikan,
    insertBulkPraktikan,
    deletePraktikan,
    updatePraktikan
}