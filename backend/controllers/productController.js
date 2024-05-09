const sql = require('../configs/database')

//@description      add product to database
//@route            POST /product
//@access           private
const addProduct = async (req, res) => {
    const pictureName = req.file.filename
    const {
        name, 
        price, 
        detail, 
        material,
        width,
        height,length,unit
    } = req.body

    if(!name || !pictureName || !price || !detail || !material )
        return res.status(400).send('Missing product info')

    try {
        const pool = await sql.connect()
        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('pictureName', sql.VarChar, pictureName)
            .input('price', sql.Decimal, price)
            .input('detail', sql.VarChar, detail)
            .input('material', sql.VarChar, material)
            .query(`INSERT INTO products (name, pictureName, price, detail , material)
            OUTPUT INSERTED.id
                    VALUES (@name, @pictureName, @price, @detail, @material)`
            )
            const productId = result.recordset[0].id; // Capture the inserted product ID

            // Insert into size table
            await pool.request()
                .input('productId', sql.Int, productId)
                .input('width', sql.Decimal, width)
                .input('height', sql.Decimal, height)
                .input('length', sql.Decimal, length)
                .input('unit', sql.VarChar, unit)
                .query(`INSERT INTO size (productId, width, height, length, unit)
                        VALUES (@productId, @width, @height, @length, @unit);`);

            res.status(201).send('Your product have been created')
    
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error')
    }
}

module.exports = {addProduct}