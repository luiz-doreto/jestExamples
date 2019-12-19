import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const checkMail = await User.findOne({ where: { email } });

    if (checkMail) {
      return res.status(400).json({ error: 'Duplicated email' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
