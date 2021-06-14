module.exports = (sequelize, Sequelize) => {
  const Items = sequelize.define("items", {
    uid: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Items;
};
