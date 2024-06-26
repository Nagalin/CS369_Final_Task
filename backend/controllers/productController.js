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
        height,
        length,
        unit
    } = req.body
    
    if
    (!name || !pictureName || !price || !detail || !material || !width || !height
     || !length || !unit 
    )
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
            const productId = result.recordset[0].id

            await pool.request()
                .input('productId', sql.Int, productId)
                .input('width', sql.Decimal, width)
                .input('height', sql.Decimal, height)
                .input('length', sql.Decimal, length)
                .input('unit', sql.VarChar, unit)
                .query(`INSERT INTO size (productId, width, height, length, unit)
                        VALUES (@productId, @width, @height, @length, @unit);`
                )

            return res.status(201).send('Your product have been created')
    
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error')
    }
}

//@description      fetch all the products info
//@route            GET /product
//@access           public
const fetchProduct =  async (req, res) => {
    try {
        const pool = await sql.connect()
        const result = await pool.request()
        .query(`SELECT 
                id,
                name,
                pictureName,
                price
                FROM products`)
        res.send(result.recordset)
    }
     catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }
}

//@description      fetch the info of corresponding product
//@route            GET /product/:id
//@access           public
const fetchProductWithId = async (req, res) => {
    const productId = req.params.id
    try {
        const pool = await sql.connect()
        const result = await pool.request()
        .input('id', sql.VarChar, productId)
        .query(`SELECT    
                products.id,   
                products.name,
                products.pictureName,
                products.price,
                products.detail,
                products.material,
                s.productId,
                s.width,
                s.height,
                s.length,
                s.unit 
                FROM products JOIN size s ON 
                @id = products.id AND 
                @id = s.productId`
        )

       return result.recordset.length === 0 ?
       res.status(404).send('No info found on this product'):
       res.send(result.recordset[0])
    }
     catch (error) {
        console.error(error)
        res.status(500).send('Internal server error')
    }

}

module.exports = { addProduct, fetchProduct,fetchProductWithId }