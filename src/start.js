const server = require('./server/app');

const PORT = process.env.PORT || 3030;

if (!module.parent) {
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}

module.exports = server;
