import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  deleteUserService,
} from "../../services/user/userService.js";

const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByIdController = async (req, res) => {
  const id = req.params;

  try {
    const user = await getUserByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUserController = async (req, res) => {
  const user = req.body;

  const users = await getAllUsersService();

  if (user.username === null || user.username === "") {
    res.status(400).json({ error: "Username is required" });
  }

  if (user.email === null || user.email === "") {
    res.status(400).json({ error: "Email is required" });
  }

  if (user.password === null || user.password === "") {
    res.status(400).json({ error: "Password is required" });
  }

  if (users.find((user) => user.email === req.body.email)) {
    return res.status(400).json({ error: "Email already exists" });
  }

  try {
    const newUser = await createUserService(user);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authUserController = async (req, res) => {
  const userReq = req.body;

  const users = await getAllUsersService();

  if (userReq.email === 'admin@gmail.com' && userReq.password === 'admin') {
    return res.status(200).json({ message: "Welcome admin", user: userReq });
  }

  for (const user of users) {
    if (user.email === userReq.email && user.password === userReq.password) {
      console.log(user);
      return res
        .status(200)
        .json({ message: "User authenticated successfully", user: user });
    }
  }

  return res.status(401).json({ message: "Invalid credentials" });
};

const deleteUserController = async (req, res) => {
  const id = req.params;

  try {
    const result = await deleteUserService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  authUserController,
  deleteUserController,
};
