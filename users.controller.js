let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).send();
  }
  return res.json(user);
};

const createUser = (req, res) => {
  const { name, email, phone } = req.body;
  const user = { id: users.length + 1, name: name, email: email, phone: phone };
  users.push(user);
  return res.status(201).json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send();
  }
  users = users.filter((user) => user.id !== id);
  return res.status(204).send();
};

module.exports = { getUsers, getUser, createUser, deleteUser };
