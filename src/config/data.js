const users = [
    {
        name: 'Admin',
        lastname: 'User',
        username: 'admin',
        password: 'admin123', // La encriptaremos antes de guardarla
        phone: 1234567890,
        address: 'Admin Address',
        role: 'admin'
    },
    {
        name: 'Guest',
        lastname: 'User',
        username: 'guest',
        password: 'guest123', // También la encriptaremos
        phone: 9876543210,
        address: 'Guest Address',
        role: 'guest'
    }
];

module.exports = users;