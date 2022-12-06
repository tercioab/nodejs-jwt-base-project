const { verifyToken } = require('../auth/jwtFunctions');

const createProduct = (req, res) => {
    if (!req.body.title || !req.body.price) {
        return res.status(400).json({ message: 'Produto sem titulo ou preço' });
    }
    const { Authorization } = req.headers;
    const payload = verifyToken(Authorization);
    return res.status(201).json({
            message: 'Produto criado com sucesso', data: { ...req.body, idUser: payload.data.id },
        });
};

module.exports = { 
    createProduct,
};