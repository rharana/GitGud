module.exports = (sequelize, DataTypes) => {
  const Repository = sequelize.define('Repository', {
    id: {
      id: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.STRING,
  });

  Repository.associate = models => {
    Repository.hasOne(models.GitUser);
    Repository.hasMany(models.Commit);
  };

  return Repository;
}