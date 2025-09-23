import pg = require('pg');

const client = new pg.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});

// CREATE
async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result); 
}

// INSERT
async function insertUsersTable() {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password) VALUES ('abhay', 'abhay@gmail.com', 'abhay@123');`
    );
    console.log(result);
}

// READ
async function readUsersTable() {
    await client.connect();
    const results = await client.query(`SELECT * FROM users LIMIT 5`);
    console.log(results);
}

// UPDATE
async function updateUsersTable() {
    await client.connect();
    const results = await client.query(`UPDATE users SET password = 'admin@12345' WHERE email = 'admin@gmail.com'`);
    console.log(results);
}

// DELETE
async function deleteUsersTable() {
    await client.connect();
    const results = await client.query(`DELETE FROM users WHERE id = 8;`);
    console.log(results);
}

// SELECT
async function selectUsersTable() {
    await client.connect();
    const results = await client.query(`SELECT * FROM users WHERE id = 1`);
    console.log(results);
}

// createUsersTable();

// insertUsersTable();

// readUsersTable();

// updateUsersTable();

// deleteUsersTable();

selectUsersTable();





