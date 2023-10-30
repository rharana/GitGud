module.exports = (sequelize, DataTypes) => {
    const Issue = sequelize.define('Issue', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      uid: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      state: DataTypes.STRING,
      created_at: DataTypes.STRING,
      closed_at: DataTypes.STRING
    });
  
    Issue.associate = models => {
      Issue.hasMany(models.Label);
      Issue.hasOne(models.GitUser);
      Issue.hasOne(models.GitUser);
      Issue.hasOne(models.Repository);
    };
  
    return Issue;
}