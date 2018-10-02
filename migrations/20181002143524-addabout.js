'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `ALTER TABLE "Users"
      ADD COLUMN about STRING`
    )    
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.sequelize.query(
      `
    ALTER TABLE "Users"
   DROP COLUMN about;`
    )
  }
};
