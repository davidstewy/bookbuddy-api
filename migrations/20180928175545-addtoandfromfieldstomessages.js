// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.createTable('users', { id: Sequelize.INTEGER });
//     */
//     return queryInterface.sequelize.query(
//       `
//       ALTER TABLE "Messages" 
//       ADD COLUMN toUserID INTEGER
//       ADD COLUMN fromUserID INTEGER;
//       `
//     )
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.dropTable('users');      
//     */

//     return queryInterface.sequelize.query(
//       `
//     ALTER TABLE "Messages" 
//     REMOVE COLUMN toUserID INTEGER
//     REMOVE COLUMN fromUserID INTEGER;
//     `
//     )
//   }
// };
