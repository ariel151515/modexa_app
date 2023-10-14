const app = require('./app.js');
require('./db/db.js');

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server listen on port', PORT, '🚀');
});
