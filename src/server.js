// src/server.js
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3303;

// Test database connection and start server
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// After sequelize.authenticate()
sequelize.sync({ force: false })
.then(() => {
  console.log('Database & tables synced!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Unable to sync the database:', err);
});