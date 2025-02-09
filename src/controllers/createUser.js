const { UserService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await UserService.createUser({
      username,
      password,
    });

    if (!user) throw Error;

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user, token });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};
