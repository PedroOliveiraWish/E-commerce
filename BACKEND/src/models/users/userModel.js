import { connection_create } from "../../database.js";

const getAllUsers = () => {
    const query = "SELECT * FROM users";

    return new Promise((resolve, reject) => {
        connection_create.query(query, (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const getUserById = (id) => {
    const query = "SELECT * FROM users WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

const createUser = (user) => {
    const { username, email, password } = user;

    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [username, email, password], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};


const deleteUser = (id) => {
    const query = "DELETE FROM users WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
                console.error(error);
            }
            resolve(results);
        });
    });
};

export { getAllUsers, getUserById, createUser, deleteUser };