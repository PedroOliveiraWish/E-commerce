import { getAllUsers, getUserById, createUser, deleteUser } from "../../models/users/userModel.js";

const getAllUsersService = async () => {
    const users = await getAllUsers();
    return users;
};

const getUserByIdService = async (id) => {
    const user = await getUserById(id);
    return user;
};

const createUserService = async (user) => {
    const createdUser = await createUser(user);

    return createdUser;
}

const deleteUserService = async (id) => {
    const result = await deleteUser(id);
    return result;
};

export { getAllUsersService, getUserByIdService, createUserService, deleteUserService };