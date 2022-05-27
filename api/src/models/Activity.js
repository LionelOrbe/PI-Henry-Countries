const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:5
      }
    },
    duration:{
      type: DataTypes.STRING
    },
    season:{
        type: DataTypes.ENUM('spring', 'summer', 'fall','winter','any')
    },
    
  },{timestamps: false});
};
