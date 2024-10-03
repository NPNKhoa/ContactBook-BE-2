const app = require('./app');
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.util.js');

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);

    console.log(`Connected to database!`);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Cannot connect to DB with error: ${error}`);
    process.exit();
  }
}

startServer();
