import { getAllUsersService, getUserByIdService, createUserService, deleteUserService } from "../../services/user/userService.js";

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

    try {
        const newUser = await createUserService(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUserController = async (req, res) => {
    const  id  = req.params;

    try {
        const result = await deleteUserService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getAllUsersController, getUserByIdController, createUserController, deleteUserController };
