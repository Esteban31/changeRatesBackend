export const getSomeWithMysql = async(req, res) =>{
    
    try {
        const [result] = await conexion.query("SELECT * FROM restaurante")
        res.json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }

}
