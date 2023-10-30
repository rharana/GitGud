module.exports = (sequelize, DataTypes) => {
    const Label = sequelize.define('Issue', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING
    });
  
    Label.associate = models => {
      Label.hasOne(models.Label);
    };
  
    return Label;
}